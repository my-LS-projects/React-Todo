import React from 'react';

// components
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"


// dummy data
const taskData = [
  {
    id: 1,
    task: "yeet myself off building",
    completed: false
  },
  {
    id: 2,
    task: "earn freedom from student loans and ISA",
    completed: false
  }
]


/**************** ****************/


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = ({
      list: taskData 
    })
  }


  /********** METHODS **********/
  toggleItem = id => {
    this.setState({
      list: this.state.list.map( item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      purchased: false,
    }
    this.setState({
      list: [...this.state.list, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Task Tracker</h1>
        <h2>Tasks (<span className="task-count">{this.state.list.length}</span> total)</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList taskData={this.state.list} toggleItem={this.toggleItem}/>
        <button className="clear" onClick={this.clearCompleted}>Clear completed</button>
      </div>
    );
  }
}

export default App;
