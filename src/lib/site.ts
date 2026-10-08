export const site = {
  name: "Groupe SAGFA",
  tagline: "Cabinet de gestion à Dakar : comptabilité, fiscalité, paie, IPM et informatique.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+221 00 000 00 00",
  // Numéro de test par défaut ; le vrai numéro se met dans .env (NEXT_PUBLIC_WHATSAPP)
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "221783036770",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

/* ⚠️ À REMPLIR : coordonnées affichées dans la section Contact de l'accueil */
export const contact = {
  adresse: "[ADRESSE], Dakar",
  telephone: site.phone,
  email: "[EMAIL]",
  horaires: "[HORAIRES]",
};

/* ⚠️ À REMPLIR : noms des partenaires par secteur (page d'accueil) */
export const secteurs = [
  { name: "BTP & Génie civil", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Commerce & Distribution", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Santé & Pharmacie", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Industrie & Production", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Immobilier & Services", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
  { name: "Transport & Logistique", partenaires: ["[PARTENAIRE]", "[PARTENAIRE]", "[PARTENAIRE]"] },
];

export const modules: { name: string; soon?: boolean }[] = [
  { name: "Paie & RH" }, { name: "Comptabilité & Fiscalité" },
  { name: "Stock & Production" }, { name: "Ventes & Facturation" },
  { name: "IPM" }, { name: "Location & Vente de biens" },
  { name: "Multi-entreprises" }, { name: "Pharmacie *", soon: true },
  { name: "Tailleur & Couture *", soon: true },
];

export type Pole = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  services: string[];
};

// Textes provisoires : à remplacer par les contenus réels de la société.
export const poles: Pole[] = [
  {
    slug: "comptabilite",
    name: "Comptabilité",
    summary: "Tenue des comptes, révision, états financiers annuels et tableaux de bord pour piloter votre activité.",
    intro: "Nous tenons votre comptabilité avec rigueur pour que vous pilotiez votre activité avec des chiffres fiables.",
    services: ["Tenue des comptes et révision", "États financiers annuels", "Tableaux de bord de pilotage", "Conseil de gestion"],
  },
  {
    slug: "fiscalite",
    name: "Fiscalité",
    summary: "Déclarations DGID, BRS, État 1024, conseil fiscal et accompagnement en cas de contrôle.",
    intro: "Nous sécurisons vos obligations fiscales et vous accompagnons dans vos relations avec la DGID.",
    services: ["Déclarations DGID et suivi des échéances", "BRS et État 1024", "Conseil fiscal", "Accompagnement en cas de contrôle"],
  },
  {
    slug: "paie-rh",
    name: "Paie & Ressources Humaines",
    summary: "Bulletins de paie, déclarations IPRES et CSS, contrats, congés et gestion du personnel.",
    intro: "Nous prenons en charge la paie et la gestion de votre personnel, dans le respect de la réglementation sociale sénégalaise.",
    services: ["Bulletins de paie", "Déclarations IPRES et CSS", "Contrats de travail", "Congés et gestion du personnel"],
  },
  {
    slug: "ipm",
    name: "IPM",
    summary: "Gestion de votre Institution de Prévoyance Maladie : adhérents, cotisations, prises en charge et remboursements.",
    intro: "Nous vous aidons à gérer votre Institution de Prévoyance Maladie au quotidien, de l'adhésion au remboursement.",
    services: ["Gestion des adhérents", "Suivi des cotisations", "Prises en charge", "Remboursements"],
  },
  {
    slug: "informatique",
    name: "Informatique",
    summary: "Installation de logiciels de gestion ; matériel et maintenance avec notre partenaire MICROCLEAN.",
    intro: "Nous installons les logiciels de gestion adaptés à votre activité et assurons le suivi technique avec notre partenaire MICROCLEAN.",
    services: ["Installation de logiciels de gestion", "Matériel informatique", "Maintenance avec MICROCLEAN", "Support et assistance"],
  },
];
