import styles from './Header.module.css';

import codeLogo from '../assets/codenws-logo.svg'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={codeLogo} alt="Logotipo code news" />
    </header>
  )
}