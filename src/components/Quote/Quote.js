import React from 'react'

export default function Quote({ quote, author }) {
  return (
    <>
    <p id='text'>
      {quote}
    </p>
    <p id='author'>
      - {author}
    </p>
    </>
  )
}
