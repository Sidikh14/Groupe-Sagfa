import Link from "next/link";
import { site, poles } from "@/lib/site";

const links = [
  ...poles.map((p) => ({ href: `/${p.slug}`, label: p.name })),
  { href: "/ipm", label: "IPM" },
  { href: "/logiciels", label: "Logiciels" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__bar">
        <Link href="/" className="brand">{site.name}</Link>
        <nav className="nav" aria-label="Navigation principale">
          {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          <Link href="/contact" className="btn">Prendre rendez-vous</Link>
        </nav>
        <details className="menu">
          <summary>Menu</summary>
          <nav aria-label="Navigation mobile">
            {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            <Link href="/contact">Prendre rendez-vous</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
