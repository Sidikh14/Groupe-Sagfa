"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "./db";
import { notify, sendMail } from "./mail";
import { checkPassword, endSession, requireAdmin, startSession } from "./auth";
import { clientIp, looksLikeBot, rateLimit } from "./antispam";

const str = (f: FormData, k: string) => String(f.get(k) ?? "").trim();
const fail = (to: string, msg: string): never => redirect(`${to}?erreur=${encodeURIComponent(msg)}`);
const num = (f: FormData, k: string) => parseInt(str(f, k), 10) || 0;

/* ---------- Connexion (administrateur uniquement) ---------- */
export async function login(f: FormData) {
  if (!rateLimit(`login:${await clientIp()}`, 10, 15 * 60 * 1000)) fail("/connexion", "Trop de tentatives. Réessayez dans quelques minutes.");
  const u = await db.user.findUnique({ where: { email: str(f, "email").toLowerCase() } });
  if (!u || u.role !== "ADMIN" || !(await checkPassword(str(f, "password"), u.passwordHash))) fail("/connexion", "Email ou mot de passe incorrect.");
  await startSession(u!.id);
  redirect("/admin");
}

export async function logout() {
  await endSession();
  redirect("/");
}

/* ---------- Formulaire de rendez-vous / contact ---------- */
export async function requestAppointment(f: FormData) {
  const from = str(f, "from") === "rendez-vous" ? "rendez-vous" : "accueil";
  const back = (q: string): never => redirect(from === "rendez-vous" ? `/rendez-vous?${q}` : `/?${q}#contact`);

  // Robot : on fait comme si c'était réussi, sans rien enregistrer.
  if (looksLikeBot(f)) back("ok=1");
  if (!rateLimit(`rdv:${await clientIp()}`, 5, 60 * 60 * 1000)) back(`erreur=${encodeURIComponent("Trop de demandes envoyées. Réessayez plus tard ou contactez-nous sur WhatsApp.")}`);

  const name = str(f, "name"), phone = str(f, "phone"), email = str(f, "email");
  if (!name || phone.length < 6) back(`erreur=${encodeURIComponent("Indiquez votre nom et un numéro de téléphone valide.")}`);
  const pole = str(f, "pole") || "Autre";
  await db.appointmentRequest.create({
    data: { name, phone, email: email || null, pole, message: str(f, "message") || null },
  });
  await notify(
    `Nouvelle demande — ${pole}`,
    `Nom : ${name}\nTéléphone : ${phone}\nEmail : ${email || "—"}\nSujet : ${pole}\nMessage : ${str(f, "message") || "—"}\nSource : ${from === "rendez-vous" ? "page Rendez-vous" : "formulaire de l'accueil"}`
  );
  if (/^\S+@\S+\.\S+$/.test(email)) {
    await sendMail(
      email,
      "Groupe SAGFA — nous avons bien reçu votre demande",
      `Bonjour ${name},\n\nNous avons bien reçu votre demande (sujet : ${pole}). Notre équipe vous rappelle très prochainement pour la suite.\n\nCordialement,\nGroupe SAGFA — Cabinet de gestion, Dakar`
    );
  }
  back("ok=1");
}

/* ---------- Administration : chiffres clés ---------- */
export async function initKeyFigures() {
  await requireAdmin();
  if ((await db.keyFigure.count()) === 0) {
    const labels = ["Années d'expérience", "Clients accompagnés", "Salariés dont nous traitons la paie", "Déclarations fiscales déposées par an"];
    await db.keyFigure.createMany({ data: labels.map((label, i) => ({ label, value: "", position: i + 1 })) });
  }
  revalidatePath("/"); revalidatePath("/a-propos");
  redirect("/admin?ok=1");
}

export async function saveKeyFigure(f: FormData) {
  await requireAdmin();
  const id = str(f, "id"), label = str(f, "label");
  if (!label) fail("/admin", "Le libellé est obligatoire.");
  const data = { label, value: str(f, "value"), position: num(f, "position") };
  if (id) await db.keyFigure.update({ where: { id }, data }); else await db.keyFigure.create({ data });
  revalidatePath("/"); revalidatePath("/a-propos");
  redirect("/admin?ok=1");
}

export async function deleteKeyFigure(f: FormData) {
  await requireAdmin();
  const id = str(f, "id");
  if (id) await db.keyFigure.delete({ where: { id } });
  revalidatePath("/"); revalidatePath("/a-propos");
  redirect("/admin?ok=1");
}

/* ---------- Administration : références ---------- */
export async function saveReference(f: FormData) {
  await requireAdmin();
  const id = str(f, "id"), name = str(f, "name");
  if (!name) fail("/admin", "Le nom est obligatoire.");
  const data = { name, logoUrl: str(f, "logoUrl") || null, position: num(f, "position") };
  if (id) await db.reference.update({ where: { id }, data }); else await db.reference.create({ data });
  revalidatePath("/");
  redirect("/admin?ok=1");
}

export async function deleteReference(f: FormData) {
  await requireAdmin();
  const id = str(f, "id");
  if (id) await db.reference.delete({ where: { id } });
  revalidatePath("/");
  redirect("/admin?ok=1");
}
