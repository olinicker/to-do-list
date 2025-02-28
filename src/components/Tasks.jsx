import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Tasks.module.css";
import { useState } from "react";
import { InfoTask } from "./InfoTask.jsx";
import { Task } from "./Task.jsx";

export function Tasks() {
  const [tasks, setTasks] = useState([
    {
      content: "Primeira task",
      completed: false,
    },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  function countCompletedTasks() {
    const tasksCompleted = tasks.filter((task) => {
      return task.completed == true;
    });
    return tasksCompleted.length;
  }

  function completeTask(taskToComplete) {
    let taskCompleted = {};

    if (taskToComplete.completed) {
      taskCompleted = {
        content: taskToComplete.content,
        completed: false,
      };
    } else {
      taskCompleted = {
        content: taskToComplete.content,
        completed: true,
      };
    }

    const taskWithoutTaskDontCompleted = tasks.filter((task) => {
      return task != taskToComplete;
    });

    taskWithoutTaskDontCompleted.push(taskCompleted);
    setTasks(taskWithoutTaskDontCompleted);

    countCompletedTasks();
  }

  function deleteTask(taskToDelete) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task != taskToDelete;
    });
    setTasks(taskWithoutDeletedOne);
  }

  function handleCreateNewTaks() {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        content: newTaskText,
        completed: false,
      },
    ]);
    setNewTaskText("");
  }

  function newTaskChange() {
    setNewTaskText(event.target.value);
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
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit" className={styles.button}>
          Criar
          <PlusCircle size={24} />
        </button>
      </form>

      <InfoTask lenght={tasks.length} tasksCompleted={countCompletedTasks()} />

      <div className={styles.tasksList}>
        {tasks.map((task) => {
          return (
            <Task
              key={task}
              task={task}
              deleteTask={() => deleteTask(task)}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}
