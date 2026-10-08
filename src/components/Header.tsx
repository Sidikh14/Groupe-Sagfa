import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/#approche", label: "Notre approche" },
  { href: "/#services", label: "Nos services" },
  { href: "/#methode", label: "Notre méthode" },
  { href: "/#sagfa360", label: "SAGFA360" },
  { href: "/#partenaires", label: "Partenaires" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__bar">
        <Link href="/" className="brand" aria-label="Groupe Sagfa — accueil">
          <Logo />
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/#contact" className="btn btn--sm">Nous contacter</Link>
        </nav>
        <details className="menu">
          <summary>Menu</summary>
          <nav aria-label="Navigation mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/#contact">Nous contacter</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
