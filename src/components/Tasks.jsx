import { PlusCircle } from "@phosphor-icons/react";

import styles from './Tasks.module.css';
import { useState } from "react";
import { InfoTask } from './InfoTask.jsx'
import { Task } from './Task.jsx'

export function Tasks() {

  const [tasks, addTasks] = useState([
    'Primeira tarefa!!',
  ])

  function handleCreateNewTaks() {
    event.preventDefault()

    const newCommentText = event.target.task.value

    addTasks([...tasks, newCommentText])
  }

  return (
    <div>

      <form onSubmit={handleCreateNewTaks} className={styles.inputTask}>
        <input className={styles.input} type="text" name="task" id="" placeholder="Adicione uma nova tarefa" />
        <button type="submit" className={styles.button}>
          Criar
          <PlusCircle size={24} />
        </button>
      </form>

      z
      <InfoTask />

      <div className={styles.tasksList}>
        {
          tasks.map(tasks => {
            return <Task content={tasks} />
          })
        }
      </div>

    </div>
  )
}