import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import FloatingChatButton from "@/app/components/floatingChatButton";
import { LocalBusinessSchema } from "@/app/components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata Configuration
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jasainstalcctv.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jual & Jasa Pasang CCTV Profesional Jawa Barat | Mitra Asia CCTV",
    template: "%s | Mitra Asia CCTV",
  },
  description: "Jual kamera CCTV dan jasa instalasi, service, maintenance CCTV profesional untuk rumah, kantor, dan industri. Melayani Tasikmalaya, Bandung, Garut, Ciamis & seluruh Jawa Barat dengan garansi resmi.",
  keywords: [
    "jual cctv tasikmalaya",
    "jual kamera cctv jawa barat",
    "toko cctv bandung",
    "jasa pasang cctv tasikmalaya",
    "instalasi cctv jawa barat",
    "jasa cctv bandung",
    "pasang cctv garut",
    "service cctv ciamis",
    "harga cctv murah",
    "cctv hikvision tasikmalaya",
    "cctv dahua jawa barat",
    "paket cctv rumah",
  ],
  authors: [{ name: "Mitra Asia CCTV" }],
  creator: "Mitra Asia CCTV",
  publisher: "Mitra Asia CCTV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Mitra Asia CCTV",
    title: "Jual & Jasa Pasang CCTV Profesional | Mitra Asia CCTV",
    description: "Jual kamera CCTV dan jasa instalasi, service, maintenance CCTV profesional untuk rumah, kantor, dan industri dengan garansi resmi.",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Jasa Instalasi CCTV - Mitra Asia CCTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jual & Jasa Pasang CCTV Profesional | Mitra Asia CCTV",
    description: "Jual kamera CCTV dan jasa instalasi, service, maintenance CCTV profesional untuk rumah, kantor, dan industri dengan garansi resmi.",
    images: [`${siteUrl}/images/og-image.jpg`],
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
  verification: {
    google: "RlVbsYV8o0cKYNw-_sWmCmcxiMNAe763GFZTWbSfPaY",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/android-chrome-192x192.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/android-chrome-192x192.png',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

