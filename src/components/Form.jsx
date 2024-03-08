import React, {useState } from 'react'
import styles from './Form.module.css'
const KEY = "Enter"
export default function Form({dispatch}) {
  const [task,setTask] = useState('')
  function handleKeyDown(e){
      if(e.key === KEY){
        return dispatch({type:"addTask",payLoad:task.trim()})
      }
      return;
  }
  
  return (
    <div className={styles.container}>
        <button className={styles.btn} onClick={() => dispatch({type:"addTask",payLoad:task.trim()})} ></button>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className={styles.input} onKeyDown={(e) => handleKeyDown(e)} placeholder="Create a new todo ..."/>
    </div>
  )
}
