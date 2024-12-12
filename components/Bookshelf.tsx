import React from 'react'
import Book from './Book'

interface BookData {
  title: string
  author: string
  color?: string
  textColor?: string
  active: boolean
}

interface BookshelfProps {
  books: BookData[]
}

const Bookshelf: React.FC<BookshelfProps> = ({ books }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  )
}

export default Bookshelf

