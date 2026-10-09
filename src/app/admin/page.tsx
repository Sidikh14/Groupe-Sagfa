import type { Metadata } from "next";
import Flash from "@/components/Flash";
import { requireAdmin } from "@/lib/auth";
import { db } from "@/lib/db";
import { deleteKeyFigure, deleteReference, initKeyFigures, logout, saveKeyFigure, saveReference } from "@/lib/actions";

export const metadata: Metadata = { title: "Administration", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function Admin({ searchParams }: { searchParams: Promise<{ erreur?: string; ok?: string }> }) {
  await requireAdmin();
  const { erreur, ok } = await searchParams;
  const [rdvs, figures, references] = await Promise.all([
    db.appointmentRequest.findMany({ orderBy: { createdAt: "desc" }, take: 100 }),
    db.keyFigure.findMany({ orderBy: { position: "asc" } }),
    db.reference.findMany({ orderBy: { position: "asc" } }),
  ]);
  return (
    <section className="section">
      <div className="wrap">
        <h1 style={{ fontSize: "2.2rem" }}>Administration</h1>
        <Flash ok={ok ? "Modification enregistrée." : undefined} error={erreur} />

        <h2>Demandes reçues</h2>
        <div className="table-wrap"><table>
          <thead><tr><th>Date</th><th>Nom</th><th>Téléphone</th><th>Email</th><th>Sujet</th><th>Message</th></tr></thead>
          <tbody>{rdvs.map((r) => (
            <tr key={r.id}>
              <td>{r.createdAt.toLocaleDateString("fr-FR")}</td><td>{r.name}</td><td>{r.phone}</td>
              <td>{r.email ?? "—"}</td><td>{r.pole}</td><td>{r.message}</td>
            </tr>
          ))}</tbody>
        </table></div>

        <h2>Chiffres clés</h2>
        <p className="muted">Affichés sur l'accueil et la page « À propos ». Un chiffre dont la valeur est vide n'est pas affiché. Exemples de valeur : « 10 ans », « 150+ ».</p>
        {figures.length === 0 && (
          <form action={initKeyFigures}><button className="btn">Créer les 4 chiffres clés</button></form>
        )}
        {figures.map((f) => (
          <form key={f.id} action={saveKeyFigure} className="rowform">
            <input type="hidden" name="id" value={f.id} />
            <input name="label" defaultValue={f.label} aria-label="Libellé" required />
            <input name="value" defaultValue={f.value} aria-label="Valeur" placeholder="Valeur (ex. 150+)" />
            <input name="position" type="number" defaultValue={f.position} aria-label="Ordre" />
            <button className="btn btn--sm">Enregistrer</button>
            <button className="btn btn--ghost btn--sm" formAction={deleteKeyFigure}>Supprimer</button>
          </form>
        ))}
        {figures.length > 0 && (
          <form action={saveKeyFigure} className="rowform">
            <input name="label" placeholder="Nouveau chiffre : libellé" aria-label="Libellé" required />
            <input name="value" placeholder="Valeur" aria-label="Valeur" />
            <input name="position" type="number" placeholder="Ordre" aria-label="Ordre" />
            <button className="btn btn--sm">Ajouter</button>
          </form>
        )}

        <h2 style={{ marginTop: "3rem" }}>Références clients</h2>
        <p className="muted">Affichées dans la section Partenaires de l'accueil. Le logo est facultatif : mets l'image dans <code>public/references/</code> et écris son chemin (ex. /references/client.png).</p>
        {references.map((r) => (
          <form key={r.id} action={saveReference} className="rowform">
            <input type="hidden" name="id" value={r.id} />
            <input name="name" defaultValue={r.name} aria-label="Nom" required />
            <input name="logoUrl" defaultValue={r.logoUrl ?? ""} aria-label="Logo" placeholder="/references/logo.png" />
            <input name="position" type="number" defaultValue={r.position} aria-label="Ordre" />
            <button className="btn btn--sm">Enregistrer</button>
            <button className="btn btn--ghost btn--sm" formAction={deleteReference}>Supprimer</button>
          </form>
        ))}
        <form action={saveReference} className="rowform">
          <input name="name" placeholder="Nouvelle référence : nom du client" aria-label="Nom" required />
          <input name="logoUrl" placeholder="Logo (facultatif)" aria-label="Logo" />
          <input name="position" type="number" placeholder="Ordre" aria-label="Ordre" />
          <button className="btn btn--sm">Ajouter</button>
        </form>

        <form action={logout} style={{ marginTop: "3rem" }}><button className="btn btn--ghost" style={{ cursor: "pointer" }}>Se déconnecter</button></form>
      </div>
    </section>
  );
}
