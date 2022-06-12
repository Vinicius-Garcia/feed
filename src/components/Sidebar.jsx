import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react'
export function Sidebar() {
  return(
  <aside className={styles.sidebar}>
    <img
    className={styles.cover}
     src="https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    <div className={styles.profile}>
      <img src="https://github.com/Vinicius-Garcia.png"
      className={styles.avatar}/>
      <strong>Vinicius da Silva Garcia</strong>
      <span>Web Developer</span>
    </div>
    <footer>
      <a href="#"> <PencilLine size={20}/>Editar seu perfil</a>
    </footer>
  </aside>)
}
