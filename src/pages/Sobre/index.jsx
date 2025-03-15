import { NavBar } from "../../components/NavBar"
import styles from './index.module.css'

export const Sobre = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.contentCenter}>
          <h1>Sobre</h1>
          <p>Esta é uma aplicação para um CRUD de um Reading Journal. Este projeto foi elaborado na Disciplina Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS</p>
        </div>
      </div>
    </div>
  )
}