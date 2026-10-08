export const site = {
  name: "Groupe SAGFA",
  tagline: "Comptabilité, fiscalité, informatique, santé et logiciels : un seul interlocuteur.",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+221 00 000 00 00",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "221000000000",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

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
    summary: "Tenue des comptes, bilans et suivi mensuel pour les entreprises de toute taille.",
    intro: "Nous tenons votre comptabilité avec rigueur pour que vous pilotiez votre activité avec des chiffres fiables.",
    services: ["Tenue de comptabilité", "Bilans et états financiers", "Paie et déclarations sociales", "Conseil de gestion"],
  },
  {
    slug: "fiscalite",
    name: "Fiscalité",
    summary: "Déclarations, optimisation et accompagnement face à l'administration fiscale.",
    intro: "Nous sécurisons vos obligations fiscales et vous accompagnons dans vos relations avec la DGID.",
    services: ["TVA et déclarations périodiques", "Impôts sur les sociétés", "Audit et conseil fiscal", "Accompagnement en contrôle"],
  },
  {
    slug: "informatique",
    name: "Informatique",
    summary: "Développement, maintenance et conseil pour digitaliser votre activité.",
    intro: "Nous concevons et maintenons les outils numériques adaptés à votre métier.",
    services: ["Développement sur mesure", "Sites et applications web", "Maintenance et support", "Conseil en transformation numérique"],
  },
];
