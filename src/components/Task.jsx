import React from 'react'
import styles from './Task.module.css'
import Message from './Message'

export default function Task({tasks,dispatch,message}) {

  return (
    <>
        
        {tasks.length > 0 ?
          tasks.map((task,index) => (
            <div className={styles.task} key={index}>
              <button className={styles.btn} onClick={() => dispatch({type:"changeActive",payLoad:{name:task.name,active:!task.active,id:index}})}>
                {task.active ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg> : ""}
              </button>
              <p className={styles.taskName} style={{textDecoration:task.active ? "line-through":""}}>{task.name}</p>
              <button className={styles.cross} onClick={() => dispatch({type:"removeTask",payLoad:task.name})}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
              </button>
            </div>
          )) : 
          <Message message={message}/>
        }
      </>
  )
}
