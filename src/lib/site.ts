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

export type Module = {
  slug: string;
  name: string;
  soon?: boolean;
  tagline: string;
  description: string;
  functions: string[];
  benefits: { title: string; text: string }[];
};

/* ⚠️ Textes provisoires rédigés d'après le domaine : à remplacer par les vraies fonctions de chaque module. */
export const modules: Module[] = [
  {
    slug: "paie-rh",
    name: "Paie & RH",
    tagline: "Des bulletins de paie justes et un personnel bien géré.",
    description:
      "Le module Paie & RH calcule les salaires de vos employés selon la réglementation sénégalaise et garde le dossier de chaque salarié à jour. Vous produisez les bulletins et les états de cotisations en quelques clics, sans ressaisie.",
    functions: [
      "Fiches salariés et contrats de travail",
      "Bulletins de paie générés automatiquement",
      "Calcul des cotisations IPRES et CSS et de l'impôt sur le revenu",
      "Congés, absences et heures supplémentaires",
      "Avances et prêts au personnel",
      "États de virement et états de déclarations sociales",
    ],
    benefits: [
      { title: "Gain de temps", text: "La paie du mois se prépare en quelques minutes au lieu de plusieurs heures." },
      { title: "Moins d'erreurs", text: "Les barèmes en vigueur sont appliqués automatiquement, sans calcul manuel." },
      { title: "Dossier toujours à jour", text: "Contrats, congés et historique de chaque salarié restent au même endroit." },
    ],
  },
  {
    slug: "comptabilite-fiscalite",
    name: "Comptabilité & Fiscalité",
    tagline: "Vos comptes tenus et vos déclarations prêtes à temps.",
    description:
      "Ce module tient la comptabilité de votre entreprise selon le plan comptable SYSCOHADA et prépare vos déclarations fiscales. Chaque écriture alimente directement vos états financiers et vos échéances.",
    functions: [
      "Saisie des écritures et journaux (achats, ventes, banque, caisse)",
      "Grand livre, balance et rapprochement bancaire",
      "États financiers annuels (bilan, compte de résultat)",
      "Préparation des déclarations DGID : TVA, BRS et autres",
      "Calendrier des échéances fiscales avec alertes",
      "Tableaux de bord de pilotage",
    ],
    benefits: [
      { title: "Conformité", text: "Une comptabilité normalisée et des déclarations prêtes avant l'échéance." },
      { title: "Chiffres en temps réel", text: "Vous voyez la situation de l'entreprise à tout moment, pas seulement à la clôture." },
      { title: "Sérénité fiscale", text: "Moins de pénalités grâce aux rappels d'échéances." },
    ],
  },
  {
    slug: "stock-production",
    name: "Stock & Production",
    tagline: "Savoir ce que vous avez, ce que vous fabriquez et ce qu'il vous coûte.",
    description:
      "Le module Stock & Production suit vos articles, vos entrées et sorties, et vos fabrications. Vous connaissez à chaque instant vos quantités disponibles et le coût de revient de ce que vous produisez.",
    functions: [
      "Fiches articles et catégories",
      "Entrées, sorties et transferts entre dépôts",
      "Inventaires et ajustements de stock",
      "Alertes de seuil minimum",
      "Fiches de fabrication et ordres de production",
      "Calcul du coût de revient",
    ],
    benefits: [
      { title: "Fini les ruptures", text: "Les alertes vous préviennent avant que le stock s'épuise." },
      { title: "Moins de pertes", text: "Chaque mouvement est tracé, les écarts d'inventaire se repèrent vite." },
      { title: "Prix mieux fixés", text: "Le coût de revient réel vous aide à choisir vos prix de vente." },
    ],
  },
  {
    slug: "ventes-facturation",
    name: "Ventes & Facturation",
    tagline: "Du devis à l'encaissement, tout le cycle de vente au même endroit.",
    description:
      "Ce module gère vos clients et toute la chaîne de vente : devis, commandes, livraisons, factures et encaissements. Vous savez qui vous doit quoi et vous relancez sans effort.",
    functions: [
      "Fichier clients",
      "Devis, bons de commande et bons de livraison",
      "Factures avec TVA",
      "Encaissements et paiements partiels",
      "Suivi des impayés et relances",
      "Statistiques de ventes par client et par produit",
    ],
    benefits: [
      { title: "Trésorerie suivie", text: "Les impayés sont visibles et relancés au bon moment." },
      { title: "Image professionnelle", text: "Des devis et factures propres, avec vos informations d'entreprise." },
      { title: "Pas de double saisie", text: "Une vente met à jour le stock et la comptabilité." },
    ],
  },
  {
    slug: "ipm",
    name: "IPM",
    tagline: "La gestion complète de votre Institution de Prévoyance Maladie.",
    description:
      "Le module IPM gère le quotidien d'une institution de prévoyance maladie : adhérents, cotisations, prises en charge et remboursements. Chaque dossier est suivi de l'adhésion jusqu'au remboursement.",
    functions: [
      "Fichier des adhérents et de leurs ayants droit",
      "Appel et suivi des cotisations",
      "Prises en charge auprès des prestataires de soins",
      "Traitement et suivi des remboursements",
      "Gestion des prestataires conventionnés",
      "États et statistiques de consommation",
    ],
    benefits: [
      { title: "Dossiers maîtrisés", text: "Chaque adhérent a un historique clair de ses cotisations et de ses soins." },
      { title: "Remboursements plus rapides", text: "Le traitement est suivi étape par étape, sans dossier perdu." },
      { title: "Pilotage de l'institution", text: "Les statistiques montrent où vont les dépenses de santé." },
    ],
  },
  {
    slug: "location-vente-biens",
    name: "Location & Vente de biens",
    tagline: "Vos biens, vos locataires et vos loyers sous contrôle.",
    description:
      "Ce module gère un parc de biens à louer ou à vendre : logements, locaux, terrains ou équipements. Vous suivez les contrats, les loyers attendus et les paiements reçus.",
    functions: [
      "Fiches des biens et de leurs propriétaires",
      "Contrats de location et échéanciers de loyers",
      "Quittances de loyer",
      "Suivi des impayés et relances",
      "Gestion des ventes de biens",
      "Tableaux de bord de rentabilité",
    ],
    benefits: [
      { title: "Loyers encaissés à temps", text: "Vous voyez immédiatement les retards et les relancez." },
      { title: "Tout est documenté", text: "Contrats et quittances sont retrouvés en un instant." },
      { title: "Vision de la rentabilité", text: "Vous savez quels biens rapportent le plus." },
    ],
  },
  {
    slug: "multi-entreprises",
    name: "Multi-entreprises",
    tagline: "Plusieurs sociétés, un seul accès.",
    description:
      "Le module Multi-entreprises permet de gérer plusieurs sociétés depuis un même compte. Les données de chaque société restent séparées, et vous passez de l'une à l'autre en un clic.",
    functions: [
      "Plusieurs sociétés dans un même compte",
      "Changement de société en un clic",
      "Droits des utilisateurs définis par société",
      "Données strictement séparées entre sociétés",
      "Vue d'ensemble des indicateurs clés",
    ],
    benefits: [
      { title: "Un seul outil", text: "Plus besoin de se reconnecter ou de multiplier les logiciels." },
      { title: "Confidentialité", text: "Chaque collaborateur ne voit que les sociétés qui le concernent." },
      { title: "Pilotage de groupe", text: "Vous comparez facilement vos sociétés entre elles." },
    ],
  },
  {
    slug: "pharmacie",
    name: "Pharmacie",
    soon: true,
    tagline: "Bientôt : la gestion d'officine, médicament par médicament.",
    description:
      "Le module Pharmacie est en préparation. Il suivra les médicaments, les lots et les dates de péremption, les ventes au comptoir et les commandes aux fournisseurs.",
    functions: [
      "Fiches médicaments, lots et dates de péremption",
      "Ventes au comptoir et ordonnances",
      "Commandes et réceptions fournisseurs",
      "Alertes de péremption et de rupture",
    ],
    benefits: [
      { title: "Moins de produits périmés", text: "Les alertes de péremption limitent les pertes." },
      { title: "Comptoir plus rapide", text: "Une vente se fait en quelques secondes." },
    ],
  },
  {
    slug: "tailleur-couture",
    name: "Tailleur & Couture",
    soon: true,
    tagline: "Bientôt : les commandes sur mesure, de la mensuration à la livraison.",
    description:
      "Le module Tailleur & Couture est en préparation. Il gardera les mesures de chaque client, suivra les commandes sur mesure et les essayages, et gérera les acomptes jusqu'à la livraison.",
    functions: [
      "Fiches clients et mensurations",
      "Commandes sur mesure et suivi des essayages",
      "Gestion des tissus et fournitures",
      "Acomptes, soldes et dates de livraison",
    ],
    benefits: [
      { title: "Mesures jamais perdues", text: "Les mensurations de chaque client sont conservées." },
      { title: "Délais tenus", text: "Chaque commande a sa date de livraison et son état d'avancement." },
    ],
  },
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
