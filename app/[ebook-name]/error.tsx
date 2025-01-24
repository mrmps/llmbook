"use client"

import { FileWarning } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center space-y-4">
          <FileWarning className="w-12 h-12 mx-auto text-destructive" />
          <h1 className="text-2xl font-semibold">Something went wrong!</h1>
          <p className="text-muted-foreground">{error.message || "Failed to load the PDF. Please try again."}</p>
          <Button onClick={reset}>Try again</Button>
        </CardContent>
      </Card>
    </div>
  )
}
