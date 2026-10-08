import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { poles } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return poles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = poles.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} à Dakar`,
    description: `${p.summary} Groupe SAGFA, cabinet de gestion à Dakar, Sénégal.`,
    alternates: { canonical: `/metiers/${p.slug}` },
  };
}

export default async function Metier({ params }: Props) {
  const { slug } = await params;
  const p = poles.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">Nos métiers</span>
          <h1>{p!.name}</h1>
          <p className="lead">{p!.intro}</p>
          <div className="hero__actions">
            <Link href="/rendez-vous" className="btn">Prendre rendez-vous</Link>
            <Link href="/#services" className="btn btn--ghost">Tous nos services</Link>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap">
          <h2>Nos prestations</h2>
          <ul className="list">
            {p!.services.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
