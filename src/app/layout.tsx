import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fayis-kanthapuram.vercel.app"),
  title: "Fayis Kanthapuram | MERN Stack Developer & Software Engineer",
  description: "Portfolio of Fayis Kanthapuram, a passionate MERN Stack Developer specializing in React.js, Node.js, Express, MongoDB, and TypeScript. View my latest projects and skills.",
  keywords: ["Fayis Kanthapuram", "MERN Stack Developer", "Full Stack Developer", "React Developer", "Node.js Developer", "Web Developer in Kerala", "TypeScript", "Next.js Portfolio", "Software Engineer"],
  authors: [{ name: "Fayis Kanthapuram", url: "https://fayis-kanthapuram.vercel.app" }],
  creator: "Fayis Kanthapuram",
  alternates: {
    canonical: "https://fayis-kanthapuram.vercel.app/",
  },
  openGraph: {
    title: "Fayis Kanthapuram | Premium MERN Stack Developer",
    description: "Explore the futuristic portfolio of Fayis Kanthapuram. I build highly scalable, interactive, and modern web applications.",
    url: "https://fayis-kanthapuram.vercel.app",
    siteName: "Fayis Kanthapuram Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fayis Kanthapuram - MERN Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayis Kanthapuram | MERN Stack Developer",
    description: "I build highly scalable, interactive, and modern web applications.",
    creator: "@FKanthapuram",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fayis Kanthapuram",
  jobTitle: "MERN Stack Developer",
  url: "https://fayis-kanthapuram.vercel.app",
  sameAs: [
    "https://github.com/FayisKanthapuram",
    "https://www.linkedin.com/in/fayis-kanthapuram/",
    "https://x.com/FKanthapuram"
  ],
  knowsAbout: ["React", "Node.js", "Express", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS"],
  alumniOf: "Brototype"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
