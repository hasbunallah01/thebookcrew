import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Book Crew Community",
    template: `%s | The Book Crew Community`,
  },
  description:
    "A community for readers and authors who believe every story deserves to be heard.",
  keywords: [
    "literary media",
    "author interviews",
    "book features",
    "storytellers",
    "The Book Crew",
    "publishing",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: [
      { url: "/favicon-v2.ico", sizes: "any" },
      { url: "/favicon-32x32-v2.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16-v2.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-v2.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: "The Book Crew Community",
    description:
      "A community for readers and authors who believe every story deserves to be heard.",
    siteName: site.name,
    images: [
      {
        url: "/wide_clean_professional_graphic_banner_social.png",
        width: 1733,
        height: 907,
        alt: "The Book Crew Community — Real Readers, Great Books, Stronger Together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Book Crew Community",
    description:
      "A community for readers and authors who believe every story deserves to be heard.",
    images: ["/wide_clean_professional_graphic_banner_social.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
