import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact et rendez-vous" };

export default function Contact() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Contact</h1>
          <p>Écrivez-nous ou appelez-nous : nous répondons à votre demande de rendez-vous.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <h2>Nous joindre</h2>
          <div>
            <ul className="list">
              <li>Téléphone : <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
              <li>WhatsApp : <a href={`https://wa.me/${site.whatsapp}`}>{site.phone}</a></li>
            </ul>
            <p className="note" style={{ marginTop: "2rem" }}>Le formulaire de demande de rendez-vous et la carte seront ajoutés dans la version complète.</p>
          </div>
        </div>
      </section>
    </>
  );
}
