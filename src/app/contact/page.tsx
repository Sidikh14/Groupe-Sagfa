import type { Metadata } from "next";
import Flash from "@/components/Flash";
import { site, poles } from "@/lib/site";
import { requestAppointment } from "@/lib/actions";

export const metadata: Metadata = { title: "Contact et rendez-vous" };

export default async function Contact({ searchParams }: { searchParams: Promise<{ ok?: string; erreur?: string }> }) {
  const { ok, erreur } = await searchParams;
  const tel = site.phone.replace(/\s/g, "");
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Contact</h1>
          <p>Demandez un rendez-vous : notre équipe vous rappelle pour le confirmer.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid2">
          <div>
            <Flash ok={ok ? "Demande envoyée. Nous vous rappelons pour confirmer le rendez-vous." : undefined} error={erreur} />
            <form action={requestAppointment} className="form">
              <label>Nom complet<input name="name" required autoComplete="name" /></label>
              <label>Téléphone<input name="phone" type="tel" required autoComplete="tel" /></label>
              <label>Email (facultatif)<input name="email" type="email" autoComplete="email" /></label>
              <label>Sujet
                <select name="pole">
                  {[...poles.map((p) => p.name), "IPM", "Logiciels", "Autre"].map((n) => <option key={n}>{n}</option>)}
                </select>
              </label>
              <label>Message (facultatif)<textarea name="message" rows={4} /></label>
              <button className="btn">Demander un rendez-vous</button>
            </form>
          </div>
          <div>
            <h2>Nous joindre</h2>
            <ul className="list">
              <li>Téléphone : <a href={`tel:${tel}`}>{site.phone}</a></li>
              <li>WhatsApp : <a href={`https://wa.me/${site.whatsapp}`}>{site.phone}</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
