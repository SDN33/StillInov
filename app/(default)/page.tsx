import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

// Définition du type pour les métadonnées Open Graph
interface OGMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
}

// Déclaration des métadonnées
export const metadata: Metadata & { og: OGMetadata; twitter: { card: string; title: string; description: string; image: string } } = {
  title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
  description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
  keywords: "Canva Pro gratuit, Canva gratuit, obtenir Canva Pro gratuitement, communauté Canva, avantages Canva Pro, offre Canva Pro, Canva Pro France, Canva Pro sans frais, Canva Pro gratuit en France, avoir canva gratuit.",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  og: {
    title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
    description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
    image: "https://digiload.online/images/banner.png",
    url: "https://digiload.online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canva Pro Gratuit | Rejoignez la Communauté de Canva en France",
    description: "Obtenez Canva Pro gratuitement avec notre communauté exclusive. Profitez des avantages de Canva Pro sans frais et découvrez comment notre communauté d'utilisateurs en France facilite l'accès à Canva Pro.",
    image: "https://digiload.online/images/banner.png",
  },
};

// Composant racine de la page
export default function RootLayout() {
  return (
    <html lang="fr">
      <head>
        {/* Balises Open Graph */}
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />

        {/* Balises Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Favicon */}
        <link rel="icon" href="https://digiload.online/app/favicon.ico" type="image/x-icon" />

        {/* Script Google Ads */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5355085288090957" crossOrigin="anonymous"></script>

        {/* Script pour Brevo Conversations */}
        <Script
          id="brevo-conversations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, c) {
                w.BrevoConversationsID = '66e74748bc1eee12ff09caba';
                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
                };
                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                if (d.head) d.head.appendChild(s);
              })(document, window, 'BrevoConversations');
            `,
          }}
        />
      </head>
      <body>
        {/* Ajout du DotLottie Player */}
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
