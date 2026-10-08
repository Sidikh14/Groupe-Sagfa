import type { Metadata } from "next";
import Flash from "@/components/Flash";
import { requireUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { logout } from "@/lib/actions";

export const metadata: Metadata = { title: "Mon compte" };
export const dynamic = "force-dynamic";
const STATUS = { PENDING: "En attente de paiement", PAID: "Payée", FAILED: "Échec", CANCELED: "Annulée" } as const;

export default async function Compte({ searchParams }: { searchParams: Promise<{ commande?: string }> }) {
  const user = await requireUser();
  const { commande } = await searchParams;
  const orders = await db.order.findMany({
    where: { userId: user.id }, orderBy: { createdAt: "desc" },
    include: { plan: { include: { product: true } }, subscription: true },
  });
  return (
    <section className="section">
      <div className="wrap">
        <h1 style={{ fontSize: "2.2rem" }}>Bonjour {user.name}</h1>
        <Flash ok={commande ? "Commande enregistrée. Notre équipe vous contacte pour le paiement et l'activation." : undefined} />
        <h2>Mes commandes</h2>
        {orders.length === 0 ? <p className="muted">Aucune commande pour le moment.</p> : (
          <div className="table-wrap"><table>
            <thead><tr><th>Date</th><th>Logiciel</th><th>Formule</th><th>Montant</th><th>Statut</th><th>Renouvellement</th></tr></thead>
            <tbody>{orders.map((o) => (
              <tr key={o.id}>
                <td>{o.createdAt.toLocaleDateString("fr-FR")}</td>
                <td>{o.plan.product.name}</td><td>{o.plan.label}</td>
                <td>{o.amountXof.toLocaleString("fr-FR")} FCFA</td>
                <td>{STATUS[o.status]}</td>
                <td>{o.subscription ? o.subscription.renewsAt.toLocaleDateString("fr-FR") : "—"}</td>
              </tr>))}</tbody>
          </table></div>
        )}
        <form action={logout}><button className="btn btn--ghost" style={{ color: "var(--ink)", cursor: "pointer" }}>Se déconnecter</button></form>
      </div>
    </section>
  );
}
