import { useState } from "react"
import styles from './index.module.css'

import { addBook } from '../../utils/localStorage'

export const BookForm = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [date, setDate] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const HandleRegisterBook = (e) => {
    e.preventDefault()

    const book = {
      title, author, genre, date, imageUrl
    }
    try {
      // Tenta adicionar livro e avisa o usuário sobre status
      addBook(book)
      window.alert('Livro adicionado com sucesso!')

      setTitle("")
      setAuthor("")
      setGenre("")
      setDate("")
      setImageUrl("")
    }
    catch (error) {
      window.alert(error.message)
    }
  }

  return (
    <form>
      <div className={styles.input}>
        <label>Insira o título do livro</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira o nome do autor</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira o gênero do livro</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira a data de leitura</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className={styles.input}>
        <label>Insira a um link para capa do livro (opcional)</label>
        <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>

      <button onClick={HandleRegisterBook}>
        Cadastrar
      </button>
    </form>
  )
}