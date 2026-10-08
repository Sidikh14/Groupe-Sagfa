import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Flash from "@/components/Flash";
import { currentUser } from "@/lib/auth";
import { login, register } from "@/lib/actions";

export const metadata: Metadata = { title: "Connexion" };

export default async function Connexion({ searchParams }: { searchParams: Promise<{ erreur?: string }> }) {
  if (await currentUser()) redirect("/compte");
  const { erreur } = await searchParams;
  return (
    <section className="section">
      <div className="wrap">
        <Flash error={erreur} />
        <div className="grid2">
          <form action={login} className="form">
            <h2>Se connecter</h2>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Mot de passe<input name="password" type="password" required autoComplete="current-password" /></label>
            <button className="btn">Se connecter</button>
          </form>
          <form action={register} className="form">
            <h2>Créer un compte</h2>
            <label>Nom complet<input name="name" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Téléphone<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>Mot de passe (8 caractères minimum)<input name="password" type="password" minLength={8} required autoComplete="new-password" /></label>
            <button className="btn">Créer mon compte</button>
          </form>
        </div>
      </div>
    </section>
  );
}
