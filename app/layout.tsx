import type { Metadata } from "next";

import "./globals.css";

import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ioasys books",
  description: "Teste técnico ioasys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
