import React from "react"




class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = e => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
    }

    render(){
        return (
            <form onSubmit={this.submitTask}>
                <input 
                type="text" 
                name="task" 
                placeholder="Create a task" 
                onChange={this.handleChanges}/>
                <button className="add-task">Add task</button>
            </form>

        )
        }
}


export default TodoForm