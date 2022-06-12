import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Vinicius-Garcia.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Garcia</strong>
              <time title="12 de Junho às 18:51" dateTime="2022-06-12 18:50:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito Bom!</p>
        </div>
        <footer>
          <button type="submit" className={styles.like}>
            <ThumbsUp size={20} />
            Aplaudir   <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
