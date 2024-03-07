import React, { useEffect, useReducer } from 'react'
import Nav from './Nav'
import Form from './Form'
import Conditions from './Conditions'
import { Outlet } from 'react-router-dom'
import styles from './AppLayout.module.css'
import Link from './Link'
import Task from './Task'

export default function App({tasks,dispatch}) {
  let numTask = tasks.filter(task => task.active == false).length;
  return ( 
    <div className={styles.app}>
      <Nav/> 
      <Form dispatch={dispatch}/>
      <div className={styles.container}>
        <Outlet/>
        <Conditions numTask={numTask} dispatch={dispatch}/>
      </div>
      
      
      <div className={styles.smConditions}>
          <Link/>
      </div>
      <footer className={styles.dragFooter}>
        <p className={styles.dragDrop}>Drag and drop to reorder list</p>
      </footer>
    </div>
  )
}
