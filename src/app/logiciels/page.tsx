import type { Metadata } from "next";
import Flash from "@/components/Flash";
import { db } from "@/lib/db";
import { subscribe } from "@/lib/actions";

export const metadata: Metadata = { title: "Logiciels", description: "Logiciels de gestion en abonnement mensuel ou annuel." };
export const dynamic = "force-dynamic";

export default async function Logiciels({ searchParams }: { searchParams: Promise<{ erreur?: string }> }) {
  const { erreur } = await searchParams;
  const products = await db.product.findMany({ where: { active: true }, include: { plans: { where: { active: true }, orderBy: { priceXof: "asc" } } } });
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Logiciels</h1>
          <p>Des logiciels de gestion en abonnement mensuel ou annuel.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Flash error={erreur} />
          {products.length === 0 && <p className="muted">Le catalogue sera bientôt disponible.</p>}
          {products.map((p) => (
            <article key={p.id} style={{ marginBottom: "3rem" }}>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <div className="plans">
                {p.plans.map((pl) => (
                  <form key={pl.id} action={subscribe} className="plan">
                    <strong>{pl.label}</strong>
                    <p style={{ margin: ".3rem 0 .8rem" }}>{pl.priceXof.toLocaleString("fr-FR")} FCFA</p>
                    <input type="hidden" name="planId" value={pl.id} />
                    <button className="btn" style={{ cursor: "pointer", border: 0 }}>S'abonner</button>
                  </form>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
