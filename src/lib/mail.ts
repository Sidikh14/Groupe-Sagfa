import nodemailer from "nodemailer";

/** Envoie un email. Retourne true si l'envoi a réussi. Ne bloque jamais le visiteur : en cas d'échec, l'erreur est journalisée. */
export async function sendMail(to: string, subject: string, text: string, replyTo?: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;
  if (!SMTP_HOST) {
    console.error("Email non envoyé : SMTP_HOST n'est pas configuré.");
    return false;
  }
  try {
    const port = Number(SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });
    await transporter.sendMail({ from: SMTP_USER ?? NOTIFY_EMAIL ?? to, to, subject, text, replyTo });
    return true;
  } catch (e) {
    console.error("Envoi d'email échoué :", e);
    return false;
  }
}

/** Alerte envoyée à l'équipe (NOTIFY_EMAIL). Répondre à l'email répond directement au visiteur s'il a donné son email. */
export async function notify(subject: string, text: string, replyTo?: string) {
  if (!process.env.NOTIFY_EMAIL) {
    console.error("Alerte non envoyée : NOTIFY_EMAIL n'est pas configuré.");
    return false;
  }
  return sendMail(process.env.NOTIFY_EMAIL, subject, text, replyTo);
}
