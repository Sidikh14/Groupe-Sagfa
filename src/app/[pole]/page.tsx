import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { poles } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return poles.map((p) => ({ pole: p.slug }));
}

type Props = { params: Promise<{ pole: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pole } = await params;
  const p = poles.find((x) => x.slug === pole);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function PolePage({ params }: Props) {
  const { pole } = await params;
  const p = poles.find((x) => x.slug === pole);
  if (!p) notFound();
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>{p.name}</h1>
          <p>{p.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <h2>Ce que nous faisons</h2>
          <div>
            <ul className="list">
              {p.services.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p style={{ marginTop: "2rem" }}>
              <Link href="/contact" className="btn">Prendre rendez-vous</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
