import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Factorem -- Manufacturing for the Hardest Problems",
  description:
    "Precision parts for Photonics, Quantum, Robotics, Defense, and Aerospace. Upload your CAD, get AI-powered DFM and pricing in hours. We manage production, quality, and logistics end-to-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
