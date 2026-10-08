import Link from "next/link";
import { site, poles } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <h3>{site.name}</h3>
            <p>{site.tagline}</p>
          </div>
          <div>
            <h3>Nos pôles</h3>
            {poles.map((p) => <Link key={p.slug} href={`/${p.slug}`}>{p.name}</Link>)}
            <Link href="/ipm">IPM</Link>
            <Link href="/logiciels">Logiciels</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <a href={`https://wa.me/${site.whatsapp}`}>WhatsApp</a>
            <Link href="/contact">Prendre rendez-vous</Link>
          </div>
        </div>
        <small>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</small>
      </div>
    </footer>
  );
}
