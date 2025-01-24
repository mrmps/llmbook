import React from 'react'
import Bookshelf from './Bookshelf'

const books = [
  {
    title: "Late Chunking vs Contextual Embedding",
    author: "Michael Ryaboy",
    color: "#2F4F4F", 
    textColor: "#FFFFFF",
    active: true,
    url: "/late-chunking"
  },
  {
    title: "The Ultimate Guide to Rerankers",
    author: "Michael Ryaboy",
    color: "#4A766E",
    textColor: "#FFFFFF",
    active: true,
    url: "/ultimate-guide-rerankers"
  },
  {
    title: "Choosing an Embedding Model",
    author: "Michael Ryaboy",
    color: "#967969",
    textColor: "#FFFFFF",
    active: true,
    url: "/choosing-embedding-model"
  },
  {
    title: "Efficient Text Chunking",
    author: "Michael Ryaboy",
    color: "#6B4226",
    textColor: "#FFFFFF",
    active: false,
  },
  {
    title: "Multi-Stage Reranking",
    author: "Michael Ryaboy", 
    color: "#8B4513",
    textColor: "#FFFFFF",
    active: false
  },
  {
    title: "Scaling RAG Systems",
    author: "Michael Ryaboy",
    color: "#A0522D",
    textColor: "#FFFFFF",
    active: false
  }
]

export function BookshelfExample() {
  return (
    <Bookshelf books={books} />
  )
}

