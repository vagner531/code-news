import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.cover}>

      </div>
      <div className={styles.profile}>

        <Avatar src="https://github.com/vagner531.png" />

        <strong>Vagner Santos</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
          </a>
      </footer>
    </aside>
  );
}
