import { useState } from 'react';
import { Task } from './components/Task';
import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { InfoTask } from './components/InfoTask';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask />
        <InfoTask />

        <Task
          content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        />
        <Task
          content="Nova lista"
        />
        <Task
          content="Nova lista"
        />
        <Task
          content="Nova lista"
        />
        <Task
          content="Nova lista"
        />
      </div>
    </div>
  )
}



