import Link from "next/link";
import { LogoMark } from "@/components/Logo";

/* ⚠️ À REMPLACER par les vraies informations (maquette : [ADRESSE], [NUMÉRO], [EMAIL], [HORAIRES]) */
const contact = {
  adresse: "[ADRESSE], Dakar",
  telephone: "(+221) [NUMÉRO]",
  email: "[EMAIL]",
  horaires: "[HORAIRES]",
};

/* ⚠️ À REMPLACER : numéro WhatsApp au format international, sans + ni espaces (ex. 221770000000) */
const WHATSAPP_NUMERO = "221783036770"; // numéro de test
const lienDevis = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  "Bonjour Groupe SAGFA, je souhaite obtenir un devis."
)}`;

/* ⚠️ À REMPLACER par les vrais noms de partenaires */
const secteurs = [
  { name: "BTP & Génie civil", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Commerce & Distribution", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Santé & Pharmacie", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Industrie & Production", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Immobilier & Services", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Transport & Logistique", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
];

const icons: Record<string, React.ReactNode> = {
  compta: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  fisc: <path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7" />,
  rh: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" />,
  ipm: <path d="M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z" />,
  info: <path d="M3 5h18v12H3zM8 21h8M12 17v4" />,
};
function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

const services = [
  { icon: "compta", name: "Comptabilité", text: "Tenue des comptes, révision, états financiers annuels et tableaux de bord pour piloter votre activité." },
  { icon: "fisc", name: "Fiscalité", text: "Déclarations DGID, BRS, État 1024, conseil fiscal et accompagnement en cas de contrôle." },
  { icon: "rh", name: "Paie & Ressources Humaines", text: "Bulletins de paie, déclarations IPRES et CSS, contrats, congés et gestion du personnel." },
  { icon: "ipm", name: "IPM", text: "Gestion de votre Institution de Prévoyance Maladie : adhérents, cotisations, prises en charge et remboursements." },
  { icon: "info", name: "Informatique", text: "Installation de logiciels de gestion ; matériel et maintenance avec notre partenaire MICROCLEAN." },
];

const modules = [
  { name: "Paie & RH" }, { name: "Comptabilité & Fiscalité" },
  { name: "Stock & Production" }, { name: "Ventes & Facturation" },
  { name: "IPM" }, { name: "Location & Vente de biens" },
  { name: "Multi-entreprises" }, { name: "Pharmacie *", soon: true },
  { name: "Tailleur & Couture *", soon: true },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div>
            <span className="eyebrow">Cabinet de gestion · Dakar</span>
            <h1>Votre gestion, <em>toujours claire.</em></h1>
            <p className="lead">
              Comptabilité, fiscalité, paie, IPM et informatique : GROUPE SAGFA prend en charge la gestion de
              votre entreprise, sur une seule plateforme conçue par nos équipes.
            </p>
            <div className="hero__actions">
              <Link href="/rendez-vous" className="btn">Prendre rendez-vous</Link>
              <Link href="/#services" className="btn btn--ghost">Découvrir nos services</Link>
            </div>
            <ul className="checks">
              <li>Conforme DGID, IPRES, CSS</li>
              <li>Un interlocuteur unique</li>
              <li>Partout au Sénégal</li>
            </ul>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="hero-card__art"><LogoMark variant="dark" /></div>
            <div className="hero-card__label">
              <small>Propulsé par</small>
              <strong>SAGFA<span>360</span></strong>
              <p>Votre dossier, accessible à tout moment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — APPROCHE */}
      <section id="approche" className="section section--white">
        <div className="wrap split">
          <div>
            <span className="eyebrow">01 — Notre approche</span>
            <h2>Des chiffres justes. <em>Des décisions claires.</em></h2>
            <p>
              GROUPE SAGFA SUARL est un cabinet de gestion implanté à Dakar. Nous prenons en charge la
              comptabilité, la fiscalité, la paie, les ressources humaines, l’IPM et l’informatique des
              entreprises, partout au Sénégal.
            </p>
            <p>
              Notre différence : tout notre travail est réalisé sur SAGFA360, la plateforme que nous avons
              conçue. Vos données vivent au même endroit et votre dossier reste lisible à tout moment.
            </p>
          </div>
          <ul className="pillars">
            <li><span className="chip chip--green"><Icon name="fisc" /></span><div><h3>Expertise</h3><p>Des spécialistes de la réglementation sociale et fiscale sénégalaise.</p></div></li>
            <li><span className="chip chip--sage"><Icon name="info" /></span><div><h3>Plateforme</h3><p>Un seul outil pour tout votre dossier, conçu et maintenu par nos soins.</p></div></li>
            <li><span className="chip chip--sand"><Icon name="rh" /></span><div><h3>Proximité</h3><p>Un interlocuteur dédié, dans vos locaux ou à distance.</p></div></li>
          </ul>
        </div>
      </section>

      {/* 02 — SERVICES */}
      <section id="services" className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <span className="eyebrow">02 — Nos services</span>
              <h2 style={{ margin: 0 }}>Cinq métiers, un seul interlocuteur.</h2>
            </div>
            <p>Nos prestations s’adaptent à la taille de votre entreprise, à votre activité et à vos besoins.</p>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article key={s.name} className="card">
                <span className="chip"><Icon name={s.icon} /></span>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </article>
            ))}
            <article className="card card--cta">
              <h3 style={{ marginTop: 0 }}>Un besoin spécifique ?</h3>
              <p>Parlons-en. Nous construisons une offre adaptée à votre organisation.</p>
              <a href={lienDevis} target="_blank" rel="noopener noreferrer" className="btn btn--light btn--sm">Demander un devis</a>
            </article>
          </div>
        </div>
      </section>

      {/* 03 — MÉTHODE */}
      <section id="methode" className="section section--white">
        <div className="wrap">
          <span className="eyebrow">03 — Notre méthode</span>
          <h2 style={{ marginBottom: "2rem" }}>Simple, dès le premier jour.</h2>
          <div className="steps">
            <div className="step"><small>Étape 1</small><h3>Vous transmettez</h3><p>Vos pièces nous parviennent, ou vous les saisissez directement dans SAGFA360.</p></div>
            <div className="step"><small>Étape 2</small><h3>Nous traitons</h3><p>Nos experts tiennent votre comptabilité, calculent la paie et préparent vos déclarations.</p></div>
            <div className="step"><small>Étape 3</small><h3>Vous pilotez</h3><p>Bulletins, états et déclarations sont disponibles à tout moment pour décider sereinement.</p></div>
          </div>
          <div className="benefits">
            <div className="benefit"><h3>Conformité</h3><p>Les barèmes en vigueur, appliqués automatiquement.</p></div>
            <div className="benefit"><h3>Sérénité</h3><p>Moins d’erreurs, moins de pénalités.</p></div>
            <div className="benefit"><h3>Visibilité</h3><p>Une vue claire sur la santé de votre entreprise.</p></div>
            <div className="benefit"><h3>Simplicité</h3><p>Un seul interlocuteur, un seul outil.</p></div>
          </div>
        </div>
      </section>

      {/* 04 — SAGFA360 */}
      <section id="sagfa360" className="section section--dark">
        <div className="wrap platform">
          <div>
            <span className="eyebrow">04 — Notre plateforme</span>
            <h2 className="platform__name">SAGFA<span>360</span></h2>
            <p className="platform__tag">Des modules distincts, une vision d’ensemble.</p>
            <p>
              Conçue par nos équipes, SAGFA360 réunit toutes les activités de gestion dans un même outil.
              C’est sur elle que nous traitons votre dossier, et vous y retrouvez vos documents à tout moment.
            </p>
            <ul className="modules">
              {modules.map((m) => (
                <li key={m.name} className={m.soon ? "soon" : undefined}>{m.name}</li>
              ))}
            </ul>
            <p className="footnote">* Bientôt disponible</p>
            <Link href="/logiciels" className="btn btn--light btn--sm">Voir les abonnements</Link>
          </div>
          <div className="dash" aria-hidden="true">
            <div className="dash__side"><LogoMark variant="dark" /></div>
            <div className="dash__main">
              <div className="dash__kpis"><i /><i /><i /></div>
              <div className="dash__bars">
                <b style={{ height: "35%" }} /><b className="sd" style={{ height: "55%" }} /><b style={{ height: "45%" }} />
                <b className="dk" style={{ height: "70%" }} /><b className="dk" style={{ height: "55%" }} />
                <b style={{ height: "62%" }} /><b className="dk" style={{ height: "90%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — PARTENAIRES */}
      <section id="partenaires" className="section">
        <div className="wrap">
          <div className="section__head">
            <div>
              <span className="eyebrow">05 — Nos partenaires</span>
              <h2 style={{ margin: 0 }}>Ils avancent avec nous.</h2>
            </div>
            <p>Des entreprises de tous les secteurs nous confient leur gestion au quotidien.</p>
          </div>
          <div className="sectors">
            {secteurs.map((s) => (
              <div key={s.name} className="sector">
                <h3>{s.name}</h3>
                <ul>{s.partenaires.map((p, i) => <li key={i}>{p}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="techpartner">
            Partenaire technique : <strong>MICROCLEAN</strong> — maintenance et matériel informatique
          </p>
        </div>
      </section>

      {/* 06 — CONTACT */}
      <section id="contact" className="section section--green">
        <div className="wrap contact">
          <div>
            <span className="eyebrow">06 — Contact</span>
            <h2>Parlons de <em style={{ color: "var(--sage)" }}>votre gestion.</em></h2>
            <p className="muted">
              Diagnostic de votre organisation et démonstration de SAGFA360, offerts lors d’un premier rendez-vous.
            </p>
            <dl>
              <div><dt>Adresse</dt><dd>{contact.adresse}</dd></div>
              <div><dt>Téléphone</dt><dd>{contact.telephone}</dd></div>
              <div><dt>Email</dt><dd>{contact.email}</dd></div>
              <div><dt>Horaires</dt><dd>{contact.horaires}</dd></div>
            </dl>
          </div>
          <div className="contact__card">
            <h3>Envoyer ma demande</h3>
            <p>Dites-nous votre activité et le service qui vous intéresse : nous vous répondons pour fixer un rendez-vous.</p>
            <Link href="/contact" className="btn">Ouvrir le formulaire</Link>
          </div>
        </div>
      </section>
    </>
  );
}
