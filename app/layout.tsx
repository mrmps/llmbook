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
    url: 'https://llmbook.co',
    images: [
      {
        url: 'https://og.tailgraph.com/og?fontFamily=Inter&title=LLM%20Cookbook&titleTailwind=text-white%20font-bold%20text-7xl%20tracking-tight&text=AI%20Engineering%20Guides%20by%20Michael%20Ryaboy&textTailwind=text-gray-300%20text-2xl%20mt-4%20tracking-tight&bgTailwind=bg-gradient-to-br%20from-black%20via-gray-900%20to-gray-800&overlay=1&overlayTailwind=bg-gradient-to-t%20from-blue-500/20%20to-transparent%20mix-blend-overlay&containerTailwind=flex%20flex-col%20justify-center%20items-start%20h-full%20px-16&footer=llmbook.co&footerTailwind=text-gray-400%20opacity-70',
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
    images: ['https://og.tailgraph.com/og?fontFamily=Inter&title=LLM%20Cookbook&titleTailwind=text-white%20font-bold%20text-7xl%20tracking-tight&text=AI%20Engineering%20Guides%20by%20Michael%20Ryaboy&textTailwind=text-gray-300%20text-2xl%20mt-4%20tracking-tight&bgTailwind=bg-gradient-to-br%20from-black%20via-gray-900%20to-gray-800&overlay=1&overlayTailwind=bg-gradient-to-t%20from-blue-500/20%20to-transparent%20mix-blend-overlay&containerTailwind=flex%20flex-col%20justify-center%20items-start%20h-full%20px-16&footer=llmbook.co&footerTailwind=text-gray-400%20opacity-70'],
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
