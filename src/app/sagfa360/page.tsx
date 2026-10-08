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
            Des modules distincts, une vision d’ensemble. SAGFA360 réunit toutes vos activités de gestion
            dans un même outil, conçu par nos équipes à Dakar.
          </p>
        </div>
      </section>
      <section className="section section--dark">
        <div className="wrap platform">
          <div>
            <h2 className="platform__name">Tout votre dossier, <span>au même endroit.</span></h2>
            <p>
              C’est sur SAGFA360 que nous traitons votre dossier. Vos documents, bulletins, états et
              déclarations y restent disponibles à tout moment.
            </p>
            <ul className="modules">
              {modules.map((m) => (
                <li key={m.name} className={m.soon ? "soon" : undefined}>{m.name}</li>
              ))}
            </ul>
            <p className="footnote">* Bientôt disponible</p>
            <Link href="/rendez-vous" className="btn btn--light">Demander une démonstration</Link>
          </div>
          <div className="dash" aria-hidden="true">
            <div className="dash__side" />
            <div className="dash__main">
              <div className="dash__kpis"><i /><i /><i /></div>
              <div className="dash__bars">
                <b style={{ height: "35%" }} /><b className="sd" style={{ height: "55%" }} /><b style={{ height: "45%" }} />
                <b className="dk" style={{ height: "70%" }} /><b className="dk" style={{ height: "55%" }} />
                <b style={{ height: "62%" }} /><b className="dk" style={{ height: "90%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
