import { NavBar } from "../../components/NavBar"
import styles from './index.module.css'

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h1>Página inicial</h1>
        <p>Bem vindo ao Reading Journal</p>
      </div>
    </div>
  )
}