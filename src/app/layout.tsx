import type { Metadata, Viewport } from "next";
import { identity } from "@/data/portfolio";
import "./globals.css";

const description =
  "Fayis Kanthapuram is a full stack developer in Kerala, India, building practical web applications with React, Node.js, TypeScript, and thoughtful engineering.";
export const metadata: Metadata = {
  metadataBase: new URL(identity.url),
  title: "Fayis Kanthapuram | Full Stack Developer Portfolio",
  description,
  authors: [{ name: identity.name, url: identity.url }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fayis Kanthapuram — Ideas, made real.",
    description,
    url: "/",
    siteName: "Fayis Kanthapuram",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fayis Kanthapuram — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayis Kanthapuram | Full Stack Developer",
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", apple: "/apple-icon" },
  manifest: "/manifest.webmanifest",
};
export const viewport: Viewport = { themeColor: "#f5f3ec" };
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${identity.url}/#person`,
      name: identity.name,
      alternateName: "Fayis",
      jobTitle: "Full Stack Developer",
      url: identity.url,
      image: `${identity.url}/images/fayis-portrait.webp`,
      sameAs: [identity.github, identity.linkedin, identity.twitter],
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${identity.url}/#website`,
      url: identity.url,
      name: "Fayis Kanthapuram | Full Stack Developer Portfolio",
      author: { "@id": `${identity.url}/#person` },
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
