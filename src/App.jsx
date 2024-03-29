import React from 'react'
import AppLayout from './components/AppLayout'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Task from './components/Task'
import { useEffect,useReducer } from 'react'

const storedValue = localStorage.getItem("todo")
const initialState = {
  tasks:storedValue ? JSON.parse(storedValue) : []
}


const ADD_TASk = "addTask";
const CHANGE_ACTIVE = "changeActive";
const REMOVE_TASK = "removeTask";
const CLEAR_COMPLETE = "clearComplete";
function reducer(state,action){
  switch(action.type){
    case ADD_TASk:
      if (action.payLoad === "") return {...state};
      if(!state.tasks.map(task => task.name).includes(action.payLoad)){
        return{
          ...state,
          tasks:[...state.tasks,{name:action.payLoad,active:false}]
        }
      }else{
        return state
      }

    case CHANGE_ACTIVE:
      return{
        ...state,
        tasks:state.tasks.map((task) =>{
          if(task.name === action.payLoad.name){
            return {...task,active:action.payLoad.active}
          }
          return {...task}
        })
      }
    case REMOVE_TASK:
      return{
        ...state,
        tasks:state.tasks.filter(task => task.name != action.payLoad )
      }
    case CLEAR_COMPLETE:
      return{
        ...state,
        tasks:state.tasks.filter(task => task.active != true)
      }
    default:
      throw new Error("Unknown Error")
  }
}
let msg = ["Add your todo List","There aren't any active List","You haven't completed your list"]
export default function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const {tasks} = state
  useEffect(function(){
    localStorage.setItem("todo",JSON.stringify(tasks))
  },[tasks])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout tasks={tasks} dispatch={dispatch}/>}>
          <Route index element={<Task tasks={tasks} dispatch={dispatch} message={msg[0]}/>}/>
          <Route path='active' element={<Task tasks={tasks.filter(task => task.active != true)} dispatch={dispatch}  message={msg[1]}/>}/>
          <Route path='complete' element={<Task tasks={tasks.filter(task => task.active === true)} dispatch={dispatch}  message={msg[2]}/>}/>
        </Route>
        <Route path='*' element={<p>Page not found</p>}/>
      </Routes>
    </BrowserRouter>
  )
}
