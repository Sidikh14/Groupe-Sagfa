import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__bar">
        <Link href="/" aria-label="Groupe Sagfa — accueil"><Logo variant="dark" /></Link>
        <p className="footer__motto">Structure — Vision — Cohérence — Clarté</p>
        <nav className="footer__links" aria-label="Informations légales">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </nav>
        <p className="footer__legal">© {new Date().getFullYear()} GROUPE SAGFA SUARL · Dakar, Sénégal</p>
      </div>
    </footer>
  );
}
