import React from 'react'
import Bookshelf from './Bookshelf'

const books = [
  {
    title: "The Ultimate Guide to Choosing Embedding Models for AI Applications",
    author: "Michael Ryaboy",
    color: "#2F4F4F",
    textColor: "#FFFFFF",
    active: true,
    url: "https://kx.com/ebook/the-ultimate-guide-to-choosing-embedding-models-for-ai-applications/"
  },
  {
    title: "The Art of Efficient Text Chunking in AI Applications",
    author: "Michael Ryaboy",
    color: "#4A766E",
    textColor: "#FFFFFF",
    active: false
  },
  {
    title: "Revolutionizing Search: Multi-Stage Reranking Techniques",
    author: "Michael Ryaboy",
    color: "#967969",
    textColor: "#FFFFFF",
    active: false
  },
  {
    title: "Scaling Retrieval Augmented Generation",
    author: "Michael Ryaboy",
    color: "#6B4226",
    textColor: "#FFFFFF",
    active: false
  }
]

export function BookshelfExample() {
  return (
    <Bookshelf books={books} />
  )
}

