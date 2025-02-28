import { useState } from "react";
import styles from "./Task.module.css";
import { Trash, Check } from "@phosphor-icons/react";

export function Task({ task, deleteTask, completeTask }) {
  //
  function handleCompleteTask() {
    completeTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.circular}>
        <Check className={styles.checkButton} size={24} />
        <input onClick={handleCompleteTask} type="checkbox" name="" id="" />
      </div>

      <p>{task.content}</p>
      <button onClick={deleteTask} title="deletar comentário">
        <Trash size={24} />
      </button>
    </div>
  );
}
