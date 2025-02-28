import styles from './Task.module.css';
import { Trash, Check } from "@phosphor-icons/react";

export function Task({ content, deleteTask }) {

  function handleDeleteCommment(){
    deleteTask(content)
  }

  return (
    <div className={styles.task}>
      <div className={styles.circular}>
        <Check className={styles.checkButton} size={24} />
        <input type="checkbox" name="" id="" />
      </div>

      <p>{content}</p>
      <button onClick={handleDeleteCommment} title='deletar comentário'>
        <Trash size={24} />
      </button>
    </div>
  )
}
