import { useState } from "react";
import styles from "./InfoTask.module.css";

export function InfoTask({ lenght, tasksCompleted }) {
  return (
    <div className={styles.infoTask}>
      <div className={styles.created}>
        <p>Tarefas criadas</p>
        <span>{lenght}</span>
      </div>

      <div className={styles.done}>
        <p>Concluídas</p>
        <span>
          {tasksCompleted} de {lenght}
        </span>
      </div>
    </div>
  );
}
