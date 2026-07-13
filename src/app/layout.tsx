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
  metadataBase: new URL("https://fayiskanthapuram.com"),
  title: "Fayis Kanthapuram | MERN Stack Developer",
  description: "Portfolio of Fayis Kanthapuram, a passionate MERN Stack Developer building scalable, modern, and high-performance web applications using React, Node.js, and MongoDB.",
  openGraph: {
    title: "Fayis Kanthapuram | MERN Stack Developer",
    description: "Portfolio of Fayis Kanthapuram, a passionate MERN Stack Developer building scalable, modern, and high-performance web applications.",
    url: "https://fayiskanthapuram.com",
    siteName: "Fayis Kanthapuram Portfolio",
    images: [
      {
        url: "/og-image.png", // Will default to a generic if missing, but good practice
        width: 1200,
        height: 630,
        alt: "Fayis Kanthapuram Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fayis Kanthapuram | MERN Stack Developer",
    description: "Portfolio of Fayis Kanthapuram, a passionate MERN Stack Developer.",
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
        {children}
      </body>
    </html>
  );
}
