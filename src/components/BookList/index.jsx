import { Link } from "react-router-dom"
import styles from './index.module.css'

import { } from '../../utils/localStorage'

export const BookList = (props) => {

  const books = props.books
  const imgPlaceholder = "https://placehold.co/100.png"

  function formatDate(date) {
    const [ano, mes, dia] = date.split("-");
    return `${dia}/${mes}/${ano}`;
  }


  return (
    <div className={styles.container}>
      {
        (books.length === 0 || !books) && (
          <div className={styles.noBook}>
            <h3>Nenhum livro cadastrado. Comece a cadastrar agora mesmo!</h3>
            <button>
              <Link to="/cadastrar">
                Cadastrar
              </Link>
            </button>
          </div>
        )
      }
      <div className={styles.booksContainer}>
        {books.map(book => (
          <div className={styles.book}>
            <img src={book.imageUrl ? book.imageUrl : imgPlaceholder} alt="Capa do livro" width={100} />
            <div className={styles.bookContentContainer}>
              <div className={styles.bookContent}>
                <div className={styles.bookContentText}>
                  <h4>Título:</h4>
                  <p>{book.title}</p>
                </div >
                <div className={styles.bookContentText}>
                  <h4>Autor:</h4>
                  <p>{book.author}</p>
                </div>
              </div>
              <div className={styles.bookContent}>
                <div className={styles.bookContentText}>
                  <h4>Gênero:</h4>
                  <p>{book.genre}</p>
                </div>
                <div className={styles.bookContenText}>
                  <h4>Data de leitura:</h4>
                  <p>{formatDate(book.date)}</p>
                </div>
              </div>
              <div className={styles.bookButton}>
                <h4>Ações</h4>
                <button onClick={() => props.removeBook(book.title)}>
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}