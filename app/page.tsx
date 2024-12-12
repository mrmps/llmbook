"use client"

import { BookshelfExample } from '@/components/BookshelfExample'

export default function Home() {
  return (
    <div className={`min-h-screen bg-white`}>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-2 pt-12 text-left">
            <h1 className="text-4xl font-bold text-gray-900">LLM Cookbook</h1>
            <p className="text-xl text-gray-600 mt-2">
              Technical guides for building production AI systems.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-16 mb-8 text-left">Guides</h2>
          
          <BookshelfExample />

          <section className="mt-16 text-left">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">
              I&apos;m Michael Ryaboy, a developer advocate at KDB.AI. I build search systems 
              and full-stack AI applications, with a focus on scaling LLMs in production. 
              I&apos;ve spent the last 5 years implementing LLM-powered applications, and I&apos;m documenting 
              what I&apos;ve learned here.
            </p>
            <p className="mt-4 text-gray-600">
              These guides cover the technical aspects of working with embedding models, 
              implementing efficient search systems, building reliable AI applications, and more. 
              They&apos;re based on practical experience and are intended for engineers working 
              with LLMs in production environments.
            </p>
            <div className="mt-4">
              <a 
                href="https://www.linkedin.com/in/michael-ryaboy-software-engineer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Connect with me on LinkedIn
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

