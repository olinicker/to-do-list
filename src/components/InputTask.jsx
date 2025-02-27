import { PlusCircle } from "@phosphor-icons/react"

import styles from './InputTask.module.css'

export function InputTask() {
  return (
    <div className={styles.inputTask}>
      <input className={styles.input} type="text" name="" id="" placeholder="Adicione uma nova tarefa" />
      <button className={styles.button}>
        Criar
        <PlusCircle size={24} />
      </button>
    </div>
  )
}