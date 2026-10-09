import { db } from "./db";

/** Chiffres clés affichés sur le site (ceux dont la valeur est renseignée). Jamais d'erreur côté visiteur. */
export async function getKeyFigures() {
  try {
    const rows = await db.keyFigure.findMany({ orderBy: { position: "asc" } });
    return rows.filter((f) => f.value.trim() !== "");
  } catch {
    return [];
  }
}

export async function getReferences() {
  try {
    return await db.reference.findMany({ orderBy: { position: "asc" } });
  } catch {
    return [];
  }
}
