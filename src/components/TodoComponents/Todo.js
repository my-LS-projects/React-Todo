import React from "react"


const Todo = props => (
    <div className={`item${props.item.completed ? ' purchased' : ''}`}>
    <p>{props.item.task}</p></div>
    )
    

export default Todo