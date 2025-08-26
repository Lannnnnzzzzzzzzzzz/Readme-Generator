import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/app/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const productionUrl = "https://readme-ai-generator.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),

  title: "AI README Generator for GitHub | Create README.md Instantly",
  description:
    "Buat file README.md GitHub profesional dalam hitungan detik dengan editor markdown bertenaga AI kami. Cukup masukkan URL repositori untuk mendapatkan README yang terstruktur dan siap pakai.",

  keywords:
    "generator readme AI, generator readme GitHub, generator Markdown, buat readme.md, readme otomatis, readme profil GitHub, readme profesional",

  icons: {
    icon: "/file.svg",
  },

  openGraph: {
    title: "AI README Generator untuk GitHub",
    description:
      "Buat file README.md profesional secara instan untuk repositori GitHub Anda menggunakan AI.",
    url: productionUrl,
    siteName: "AI README Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI README Generator untuk GitHub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI README Generator untuk GitHub",
    description:
      "Buat file README.md profesional secara instan untuk repositori GitHub Anda menggunakan AI.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
