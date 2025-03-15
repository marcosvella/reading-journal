import { Link } from 'react-router-dom'

import styles from './index.module.css'

export const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navItemsContainer}>
        <div className={styles.navItem}>
          <Link to={'/'} > Home </Link>
        </div>
        <div className={styles.navItem}>
          <Link to={'/sobre'}> Sobre </Link>
        </div>
        <div className={styles.navItem}>
          <Link to={'/lista-de-livros'}> Lista de livros </Link>
        </div>
        <div className={styles.navItem}>
          <Link to={'/cadastrar'}> Cadastrar </Link>
        </div>
      </div>
    </nav>
  )
}