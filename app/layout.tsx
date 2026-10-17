import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Afonso Nobre Advocacia | Direito agrário, ambiental e empresarial no Pará";
const description =
  "Advocacia especializada desde 2006 em Belém e Paragominas: agrário e agronegócios, ambiental, fundiário, imobiliário, empresarial, sucessão e direito portuário.";

export const metadata: Metadata = {
  metadataBase: new URL("https://conteudo.afonsonobre.com.br"),
  title,
  description,
  alternates: { canonical: "/portifolio" },
  icons: { icon: "https://afonsonobre.com.br/wp-content/uploads/2023/03/favicon.png" },
  openGraph: {
    title,
    description,
    url: "/portifolio",
    siteName: "Afonso Nobre Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://afonsonobre.com.br/wp-content/uploads/2023/03/logomarca.png",
        width: 900,
        height: 600,
        alt: "Afonso Nobre Advocacia",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#1E3A2F",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Afonso Nobre Advocacia",
  url: "https://afonsonobre.com.br/",
  foundingDate: "2006",
  telephone: "+55 91 3230-4267",
  email: "advocacia@afonsonobre.com.br",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Trav. Quintino Bocaiúva, 2301, salas 613-615",
      addressLocality: "Belém",
      addressRegion: "PA",
      postalCode: "66045-315",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Av. do Contorno, 1298",
      addressLocality: "Paragominas",
      addressRegion: "PA",
      postalCode: "68625-245",
      addressCountry: "BR",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600&family=Public+Sans:wght@400;500;600&display=swap"
        />
        <link rel="preconnect" href="https://afonsonobre.com.br" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
