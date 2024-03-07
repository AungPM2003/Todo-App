import React, { useState } from 'react'
import styles from './Form.module.css'
export default function Form({dispatch}) {
  const [task,setTask] = useState('')
  return (
    <div className={styles.container}>
        <button className={styles.btn} onClick={() => dispatch({type:"addTask",payLoad:task.trim()})} ></button>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className={styles.input} placeholder="Create a new todo ..."/>
    </div>
  )
}
