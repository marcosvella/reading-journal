import { useEffect, useState } from "react"
import styles from './index.module.css'

import { addBook } from '../../utils/localStorage'

export const BookForm = () => {
  const [title, setTitle] = useState(null)
  const [author, setAuthor] = useState(null)
  const [genre, setGenre] = useState(null)
  const [date, setDate] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const HandleRegisterBook = (e) => {
    e.preventDefault()

    const book = {
      title, author, genre, date, imageUrl
    }
    try {
      // Tenta adicionar livro e avisa o usuário sobre status
      addBook(book)
      window.alert('Livro adicionado com sucesso!')

      setTitle(null)
      setAuthor(null)
      setGenre(null)
      setDate(null)
      setImageUrl(null)
    }
    catch (error) {
      window.alert(error.message)
    }
  }

  return (
    <form>
      <div className={styles.input}>
        <label>Insira o título do livro</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira o nome do autor</label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira o gênero do livro</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira a data de leitura</label>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira a um link para capa do livro (opcional)</label>
        <input type="url" onChange={(e) => setImageUrl(e.target.value)} />
      </div>

      <button onClick={HandleRegisterBook}>
        Cadastrar
      </button>
    </form>
  )
}