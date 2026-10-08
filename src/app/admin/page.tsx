import type { Metadata } from "next";
import Flash from "@/components/Flash";
import { requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { addProduct, logout, markPaid } from "@/lib/actions";

export const metadata: Metadata = { title: "Administration", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function Admin({ searchParams }: { searchParams: Promise<{ erreur?: string }> }) {
  await requireAdmin();
  const { erreur } = await searchParams;
  const [orders, rdvs, products] = await Promise.all([
    db.order.findMany({ orderBy: { createdAt: "desc" }, take: 50, include: { user: true, plan: { include: { product: true } } } }),
    db.appointmentRequest.findMany({ orderBy: { createdAt: "desc" }, take: 50 }),
    db.product.findMany({ include: { plans: true } }),
  ]);
  return (
    <section className="section">
      <div className="wrap">
        <h1 style={{ fontSize: "2.2rem" }}>Administration</h1>
        <Flash error={erreur} />

        <h2>Demandes de rendez-vous</h2>
        <div className="table-wrap"><table>
          <thead><tr><th>Date</th><th>Nom</th><th>Téléphone</th><th>Sujet</th><th>Message</th></tr></thead>
          <tbody>{rdvs.map((r) => (
            <tr key={r.id}><td>{r.createdAt.toLocaleDateString("fr-FR")}</td><td>{r.name}</td><td>{r.phone}</td><td>{r.pole}</td><td>{r.message}</td></tr>
          ))}</tbody>
        </table></div>

        <h2>Commandes</h2>
        <div className="table-wrap"><table>
          <thead><tr><th>Date</th><th>Client</th><th>Logiciel</th><th>Montant</th><th>Statut</th><th></th></tr></thead>
          <tbody>{orders.map((o) => (
            <tr key={o.id}>
              <td>{o.createdAt.toLocaleDateString("fr-FR")}</td><td>{o.user.name}<br /><span className="muted">{o.user.phone ?? o.user.email}</span></td>
              <td>{o.plan.product.name} ({o.plan.label})</td><td>{o.amountXof.toLocaleString("fr-FR")} FCFA</td><td>{o.status}</td>
              <td>{o.status === "PENDING" && <form action={markPaid}><input type="hidden" name="orderId" value={o.id} /><button className="btn" style={{ cursor: "pointer", border: 0 }}>Marquer payée</button></form>}</td>
            </tr>))}</tbody>
        </table></div>

        <div className="grid2">
          <div>
            <h2>Catalogue</h2>
            <ul className="list">{products.map((p) => <li key={p.id}><strong>{p.name}</strong><br />{p.plans.map((pl) => `${pl.label} : ${pl.priceXof.toLocaleString("fr-FR")} FCFA`).join(" · ")}</li>)}</ul>
          </div>
          <form action={addProduct} className="form">
            <h2>Ajouter un logiciel</h2>
            <label>Nom<input name="name" required /></label>
            <label>Description<textarea name="description" rows={3} /></label>
            <label>Formule<select name="interval"><option value="MONTH">Mensuelle</option><option value="YEAR">Annuelle</option></select></label>
            <label>Prix en FCFA<input name="price" type="number" min={1} required /></label>
            <button className="btn">Ajouter</button>
          </form>
        </div>
        <form action={logout} style={{ marginTop: "3rem" }}><button className="btn btn--ghost" style={{ color: "var(--ink)", cursor: "pointer" }}>Se déconnecter</button></form>
      </div>
    </section>
  );
}
