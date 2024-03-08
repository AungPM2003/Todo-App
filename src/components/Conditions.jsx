import React from 'react'
import styles from './Conditions.module.css'
import { NavLink } from 'react-router-dom'
import Link from './Link'

// let numTask = 0;
export default function Conditions({numTask,dispatch}) {
  // tasks.map(task => task.active ? numTask - 1 : numTask)
  return (
    <div className={styles.container}>
          <div>{numTask} items left</div>

        <div className={styles.conditions}>
           <Link/>
        </div>
        <div onClick={() => dispatch({type:"clearComplete"})} style={{cursor:"pointer"}}>Clear Completed</div>
    </div>
  )
}
