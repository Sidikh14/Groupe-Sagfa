import type { Metadata } from "next";

export const metadata: Metadata = { title: "Logiciels", description: "Logiciels de gestion en abonnement mensuel ou annuel." };

export default function Logiciels() {
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
          <p className="note">Le catalogue, les formules et la boutique seront ajoutés dans la version complète, une fois la liste des logiciels et les prix définis.</p>
        </div>
      </section>
    </>
  );
}
