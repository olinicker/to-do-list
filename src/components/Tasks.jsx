import { PlusCircle } from "@phosphor-icons/react";

import styles from './Tasks.module.css';
import { useState } from "react";
import { InfoTask } from './InfoTask.jsx'
import { Task } from './Task.jsx'

export function Tasks() {

  const [task, setTask] = useState(
    ['Primeira task'],
  )
  
  const [newTaskText, setNewTaskText] = useState('')

  function deleteTask(taskToDelete){
    const taskWithoutDeletedOne = task.filter(task => {
        return task != taskToDelete
      }
    )
    setTask(taskWithoutDeletedOne)
  }

  function handleCreateNewTaks() {
    event.preventDefault()
    setTask([...task, newTaskText])
    setNewTaskText('')
  }

  function newTaskChange(){
    setNewTaskText(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTaks} className={styles.inputTask}>
        <input 
        onChange={newTaskChange}
        className={styles.input} 
        value={newTaskText}
        type="text"
        name="task" 
        placeholder="Adicione uma nova tarefa" />
        <button type="submit" className={styles.button}>
          Criar
          <PlusCircle size={24} />
        </button>
      </form>

      <InfoTask lenght={task.length} />

      <div className={styles.tasksList}>
        {
          task.map(task => {
            return( 
              <Task 
              key={task}
              content={task}
              deleteTask={deleteTask}
              />
            )
          })
        }
      </div>
    </div>
  )
}