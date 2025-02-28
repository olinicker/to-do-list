import styles from './Task.module.css';
import { Trash, Check } from "@phosphor-icons/react";

// content

export function Task({ content }) {
  return (
    <div className={styles.task}>
      <div className={styles.circular}>
        <Check className={styles.checkButton} size={24} />
        <input type="checkbox" name="" id="" />
      </div>

      <p>{content}</p>
      <button title='deletar comentário'>
        <Trash size={24} />
      </button>
    </div>
  )
}
