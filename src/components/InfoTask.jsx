import styles from './InfoTask.module.css';

export function InfoTask() {
  return (
    <div className={styles.infoTask}>
      <div className={styles.created}>
        <p>Tarefas criadas</p>
        <span>5</span>
      </div>

      <div className={styles.done}>
        <p>Concluídas</p>
        <span>2 de 5</span>
      </div>
    </div>
  )
}