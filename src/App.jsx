import React from 'react'
import AppLayout from './components/AppLayout'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Task from './components/Task'
import { useEffect,useReducer } from 'react'

const storedValue = localStorage.getItem("todo")
const initialState = {
  tasks:storedValue ? JSON.parse(storedValue) : []
}
// console.log(storedValue)
function reducer(state,action){
  switch(action.type){
    case "addTask":
      if (action.payLoad === "") return {...state}
      return {
          ...state,
          tasks:[...state.tasks,{name:action.payLoad,active:false}]
        }
    case "changeActive":
      return{
        ...state,
        tasks:state.tasks.map((task) =>{
          if(task.name === action.payLoad.name){
            return {...task,active:action.payLoad.active}
          }
          return {...task}
        })
      }
    case "removeTask":
      return{
        ...state,
        tasks:state.tasks.filter(task => task.name != action.payLoad )
      }
    case "clearCompelete":
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
  },[tasks,"todo"])
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
