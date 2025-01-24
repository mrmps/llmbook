"use client"

import { useParams } from "next/navigation"
import { Download, FileWarning, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"

const PDF_MAP = {
  "late-chunking": {
    url: "https://29cf64c7o6.ufs.sh/f/Sn1r0iGFGkx7u6qhgfeN3qD4K7Fd1ho6X8QR0wYcSJnTzyxC",
    title: "Late Chunking vs Contextual Embedding",
  },
  "ultimate-guide-rerankers": {
    url: "https://29cf64c7o6.ufs.sh/f/Sn1r0iGFGkx7XMA3qCfNa7AMFvT5cjCnODtH9BKokU8QmhrY", 
    title: "The Ultimate Guide to Rerankers",
  },
  "choosing-embedding-model": {
    url: "https://29cf64c7o6.ufs.sh/f/Sn1r0iGFGkx7ajwiqeRHvGjbKOsR0kac2nU4qFDJgdprZeI8", 
    title: "Choosing an Embedding Model",
  },
}

export default function PDFViewer() {
  const [isDownloading, setIsDownloading] = useState(false)
  const params = useParams()
  const pdfName = params["ebook-name"] as string

  const pdfData = PDF_MAP[pdfName as keyof typeof PDF_MAP]

  const handleDownload = async () => {
    if (!pdfData) return

    setIsDownloading(true)
    try {
      const response = await fetch(pdfData.url)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = `${pdfData.title}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  if (!pdfData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
        <Card className="w-full max-w-md border-none shadow-lg">
          <CardContent className="pt-8 pb-8 text-center space-y-6">
            <FileWarning className="w-16 h-16 mx-auto text-muted-foreground opacity-80" />
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight">Invalid PDF Name</h1>
              <p className="text-muted-foreground text-lg">The requested document could not be found.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← View all eBooks
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 mb-8">
          <div className="space-y-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight">{pdfData.title}</h1>
            <p className="text-muted-foreground">Interactive PDF Document</p>
          </div>
          <Button 
            onClick={handleDownload} 
            disabled={isDownloading}
            size="lg"
            className="shadow-sm transition-all hover:shadow-md"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </>
            )}
          </Button>
        </div>

        <div className="w-full bg-card rounded-xl shadow-xl overflow-hidden border border-border/50">
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfData.url)}&embedded=true`}
            className="w-full h-[calc(100vh-12rem)] bg-background"
            title={pdfData.title}
          />
        </div>
      </div>
    </div>
  )
}
