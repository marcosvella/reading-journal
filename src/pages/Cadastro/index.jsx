import { NavBar } from "../../components/NavBar"

import { BookForm } from "../../components/BookForm"
import styles from './index.module.css'

export const Cadastro = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h1>Cadastrar Livro</h1>
        <p>Cadastre seus livros lidos utilizando o formulário</p>
        <BookForm />
      </div>
    </div>
  )
}