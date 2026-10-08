import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Cabinet de gestion à Dakar, Sénégal`, template: `%s | ${site.name}` },
  keywords: ["cabinet de gestion Dakar", "comptabilité Dakar", "fiscalité Sénégal", "paie Sénégal", "IPM", "logiciel de gestion Sénégal"],
  description: site.tagline,
  openGraph: { siteName: site.name, locale: "fr_SN", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={sans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: site.name,
              url: site.url,
              description: site.tagline,
              areaServed: "Sénégal",
              address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
