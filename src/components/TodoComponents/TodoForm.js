import React from "react"




const TodoForm = props => (
        <div>
            <input type="text" name="task" placeholder="Task title"></input>
            <button>Add task</button>
            <button onClick={props.clearCompleted}>Clear completed</button>
        </div>
    )


export default TodoForm