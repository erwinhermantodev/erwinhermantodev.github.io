import type { Metadata } from "next";
import { Archivo_Black, Space_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Erwin Hermanto | Software Engineer Portfolio",
  description: "Seasoned Software Engineer with 9+ years building enterprise systems, leading teams, and architecting microservices across fintech, logistics, and hospitality sectors.",
  keywords: ["Erwin Hermanto", "Software Engineer", "Squad Leader", "Technical Leader", "Golang", "Ruby on Rails", "React", "Portfolio"],
  other: {
    "facebook-domain-verification": "9dh8panjvmczfcbtcfcir9hu5qt941",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${spaceMono.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="p-4 lg:p-8 min-h-screen">
        {children}
      </body>
    </html>
  );
}
