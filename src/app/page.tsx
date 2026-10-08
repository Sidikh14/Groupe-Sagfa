import Link from "next/link";
import { site, poles } from "@/lib/site";

export default function Home() {
  const index = [
    ...poles.map((p) => ({ href: `/${p.slug}`, name: p.name, line: p.services[0] })),
    { href: "/ipm", name: "IPM", line: "Prévoyance maladie" },
    { href: "/logiciels", name: "Logiciels", line: "Abonnements en ligne" },
  ];
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <h1>{site.name}</h1>
            <p>{site.tagline}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn">Prendre rendez-vous</Link>
              <Link href="/logiciels" className="btn btn--ghost">Voir nos logiciels</Link>
            </div>
          </div>
          <ul className="index">
            {index.map((i) => (
              <li key={i.href}>
                <Link href={i.href}>{i.name}<span>{i.line}</span></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2>Un seul groupe pour vos obligations et vos outils</h2>
          <div>
            <p>
              Comptabilité, fiscalité, informatique, prévoyance maladie et logiciels de gestion :
              vos dossiers sont suivis par des équipes qui travaillent ensemble.
            </p>
            <p className="note">Texte provisoire, à remplacer par la présentation réelle du groupe.</p>
          </div>
        </div>
      </section>
    </>
  );
}
