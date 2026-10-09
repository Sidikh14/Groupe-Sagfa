import nodemailer from "nodemailer";

/** Envoie un email. Ne bloque jamais le visiteur : en cas d'échec, l'erreur est seulement journalisée. */
export async function sendMail(to: string, subject: string, text: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;
  if (!SMTP_HOST) return;
  try {
    const port = Number(SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });
    await transporter.sendMail({ from: SMTP_USER ?? NOTIFY_EMAIL ?? to, to, subject, text });
  } catch (e) {
    console.error("Envoi d'email échoué :", e);
  }
}

/** Notification à l'équipe (NOTIFY_EMAIL). */
export async function notify(subject: string, text: string) {
  if (process.env.NOTIFY_EMAIL) await sendMail(process.env.NOTIFY_EMAIL, subject, text);
}
