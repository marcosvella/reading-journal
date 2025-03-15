import { BookList } from "../../components/BookList"
import { NavBar } from "../../components/NavBar"
import styles from './index.module.css'

import { getBooks, removeBook } from "../../utils/localStorage"
import { useEffect, useState } from "react"

export const Livros = () => {
  const [books, setBooks] = useState([])

  function getStoredBoks() {
    const books = getBooks()
    setBooks(books)
  }

  function removeBookAndUpdateState(title) {
    try {
      const newBooks = removeBook(title)
      setBooks(newBooks)
    } catch (err) {
      window.alert(err.message)
    }
  }

  useEffect(() => {
    getStoredBoks()
  }, [])

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h1>Livros</h1>
        <p>Veja todos os livros que já foram lidos</p>
        <BookList books={books} removeBook={removeBookAndUpdateState} />
      </div>
    </div>
  )
}