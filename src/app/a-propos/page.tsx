import type { Metadata } from "next";

export const metadata: Metadata = { title: "À propos" };

export default function APropos() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>À propos</h1>
          <p>L'histoire, les valeurs et l'équipe du Groupe SAGFA.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="note">Contenu à fournir : histoire de la société, valeurs, équipe.</p>
        </div>
      </section>
    </>
  );
}
