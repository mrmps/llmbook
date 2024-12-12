import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 ${inter.className}`}>
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold tracking-tight">Michael Ryaboy&apos;s AI Engineering Guides</h1>
          <p className="mt-2 text-lg text-gray-600">
            Practical guides for building modern AI applications
          </p>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer className="border-t bg-white/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} Michael Ryaboy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

