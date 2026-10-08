"use server";
import { redirect } from "next/navigation";
import { db } from "./db";
import { notify } from "./mail";
import { checkPassword, endSession, hashPassword, requireAdmin, requireUser, startSession } from "./auth";

const str = (f: FormData, k: string) => String(f.get(k) ?? "").trim();
const fail = (to: string, msg: string): never => redirect(`${to}?erreur=${encodeURIComponent(msg)}`);

export async function register(f: FormData) {
  const email = str(f, "email").toLowerCase(), name = str(f, "name"), password = str(f, "password");
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) fail("/connexion", "Nom ou email invalide.");
  if (password.length < 8) fail("/connexion", "Le mot de passe doit contenir au moins 8 caractères.");
  if (await db.user.findUnique({ where: { email } })) fail("/connexion", "Un compte existe déjà avec cet email.");
  const u = await db.user.create({ data: { email, name, phone: str(f, "phone") || null, passwordHash: await hashPassword(password) } });
  await startSession(u.id);
  redirect("/compte");
}

export async function login(f: FormData) {
  const u = await db.user.findUnique({ where: { email: str(f, "email").toLowerCase() } });
  if (!u || !(await checkPassword(str(f, "password"), u.passwordHash))) fail("/connexion", "Email ou mot de passe incorrect.");
  await startSession(u!.id);
  redirect(u!.role === "ADMIN" ? "/admin" : "/compte");
}

export async function logout() {
  await endSession();
  redirect("/");
}

export async function requestAppointment(f: FormData) {
  const from = str(f, "from") === "rendez-vous" ? "rendez-vous" : "accueil";
  const back = (q: string): never => redirect(from === "rendez-vous" ? `/rendez-vous?${q}` : `/?${q}#contact`);
  const name = str(f, "name"), phone = str(f, "phone");
  if (!name || phone.length < 6) back(`erreur=${encodeURIComponent("Indiquez votre nom et un numéro de téléphone valide.")}`);
  const pole = str(f, "pole") || "Autre";
  await db.appointmentRequest.create({
    data: { name, phone, email: str(f, "email") || null, pole, message: str(f, "message") || null },
  });
  await notify(
    `Nouvelle demande — ${pole}`,
    `Nom : ${name}\nTéléphone : ${phone}\nEmail : ${str(f, "email") || "—"}\nSujet : ${pole}\nMessage : ${str(f, "message") || "—"}\nSource : ${from === "rendez-vous" ? "page Rendez-vous" : "formulaire de l'accueil"}`
  );
  back("ok=1");
}

export async function subscribe(f: FormData) {
  const user = await requireUser();
  const plan = await db.plan.findFirst({ where: { id: str(f, "planId"), active: true } });
  if (!plan) fail("/logiciels", "Formule introuvable.");
  await db.order.create({ data: { userId: user.id, planId: plan!.id, amountXof: plan!.priceXof } });
  redirect("/compte?commande=1");
}

export async function markPaid(f: FormData) {
  await requireAdmin();
  const order = await db.order.findUnique({ where: { id: str(f, "orderId") }, include: { plan: true, subscription: true } });
  if (!order || order.status === "PAID") redirect("/admin");
  const start = new Date(), end = new Date(start);
  if (order!.plan.interval === "YEAR") end.setFullYear(end.getFullYear() + 1); else end.setMonth(end.getMonth() + 1);
  await db.$transaction([
    db.order.update({ where: { id: order!.id }, data: { status: "PAID" } }),
    db.subscription.create({ data: { userId: order!.userId, orderId: order!.id, startsAt: start, renewsAt: end } }),
  ]);
  redirect("/admin");
}

export async function addProduct(f: FormData) {
  await requireAdmin();
  const name = str(f, "name"), price = parseInt(str(f, "price"), 10);
  if (!name || !(price > 0)) fail("/admin", "Nom et prix valides requis.");
  const slug = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  await db.product.create({
    data: {
      slug: `${slug}-${Date.now().toString(36)}`, name, description: str(f, "description"),
      plans: { create: { label: str(f, "interval") === "YEAR" ? "Annuel" : "Mensuel", interval: str(f, "interval") === "YEAR" ? "YEAR" : "MONTH", priceXof: price } },
    },
  });
  redirect("/admin");
}
