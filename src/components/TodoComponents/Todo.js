import React from "react"


const Todo = props => (
    
    <div className={`item${props.item.completed ? ' completed' : ''}`} onClick={() => props.toggleItem(props.item.id)}>
        {console.log("TOGGLE ITEM: ", props.toggleItem)}
        <p>"{props.item.task}"</p>
    </div>
    )
    

export default Todo