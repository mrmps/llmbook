import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: 'LLM Cookbook: AI Engineering Guides | Michael Ryaboy',
  description: 'Technical guides for building production AI systems. Learn about embedding models, text chunking, search systems, and scaling LLMs from an experienced AI engineer.',
  openGraph: {
    title: 'LLM Cookbook: AI Engineering Guides',
    description: 'Technical guides for building production AI systems. Learn about embedding models, text chunking, search systems, and scaling LLMs from an experienced AI engineer.',
    type: 'website',
    url: 'https://llm-cookbook.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LLM Cookbook: AI Engineering Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLM Cookbook: AI Engineering Guides',
    description: 'Technical guides for building production AI systems by Michael Ryaboy',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
