import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VP Solutions – Reliable Workforce. Smart Infrastructure.",
  description:
    "VP Solutions delivers end-to-end manpower, solar EPC, facility management, and smart infrastructure services across government departments, electricity boards, municipalities, and private enterprises in Maharashtra since 2005.",
  keywords: [
    "manpower supply Maharashtra",
    "meter reading MSCB",
    "solar EPC contractor",
    "facility management Pune",
    "government outsourcing India",
    "municipal corporation services",
    "VP Solutions",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "VP Solutions – Reliable Workforce. Smart Infrastructure.",
    description:
      "Trusted government and private sector partner since 2005. 1000+ employees, 50+ government projects across Maharashtra.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "VP Solutions" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
