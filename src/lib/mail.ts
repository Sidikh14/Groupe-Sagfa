import nodemailer from "nodemailer";

/** Envoie un email à l'équipe. Ne bloque jamais le visiteur : en cas d'échec, l'erreur est seulement journalisée. */
export async function notify(subject: string, text: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;
  if (!SMTP_HOST || !NOTIFY_EMAIL) return;
  try {
    const port = Number(SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });
    await transporter.sendMail({ from: SMTP_USER ?? NOTIFY_EMAIL, to: NOTIFY_EMAIL, subject, text });
  } catch (e) {
    console.error("Notification email échouée :", e);
  }
}
