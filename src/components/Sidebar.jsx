import { PencilLine } from 'phosphor-react'

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      /> */}
      <div className={styles.cover}>

      </div>
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/vagner531.png" alt="" />

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
