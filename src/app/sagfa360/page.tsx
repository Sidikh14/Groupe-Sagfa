import type { Metadata } from "next";
import Link from "next/link";
import { modules } from "@/lib/site";

export const metadata: Metadata = {
  title: "SAGFA360, la plateforme de gestion",
  description: "SAGFA360 : paie, comptabilité, fiscalité, stock, facturation et IPM dans un seul outil, conçu par le Groupe SAGFA à Dakar.",
  alternates: { canonical: "/sagfa360" },
};

export default function Sagfa360() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Notre plateforme</span>
          <h1>SAGFA<em>360</em></h1>
          <p className="lead">
            Des modules distincts, une vision d’ensemble. Chaque module répond à un besoin précis, et tous
            partagent les mêmes données.
          </p>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap">
          <span className="eyebrow">Les modules</span>
          <h2>Choisissez le module qui vous intéresse.</h2>
          <div className="cards">
            {modules.map((m) => (
              <article key={m.slug} className="card">
                {m.soon && <span className="badge-soon">Bientôt disponible</span>}
                <h3>{m.name}</h3>
                <p>{m.tagline}</p>
                <Link href={`/sagfa360/${m.slug}`} className="card__more">Voir le module →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="wrap">
          <h2>Envie de voir SAGFA360 en action ?</h2>
          <p className="muted">Une démonstration vous est offerte lors d’un premier rendez-vous.</p>
          <Link href="/rendez-vous" className="btn btn--light">Demander une démonstration</Link>
        </div>
      </section>
    </>
  );
}
