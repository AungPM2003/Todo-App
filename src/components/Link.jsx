import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Link() {
  return (
    <>
        <NavLink to="/">
            <div style={{cursor:"pointer"}}>All</div>
        </NavLink>
        <NavLink to="active">
            <div style={{cursor:"pointer"}}>Active</div>
        </NavLink>
        <NavLink to="complete">
            <div style={{cursor:"pointer"}}>Completed</div>
        </NavLink>
        
    </>
  )
}
