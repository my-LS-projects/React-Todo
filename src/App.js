import React from 'react';

// components
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"


// dummy data
const dummyData = [
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
      dummyData // this is the same as dummyData: dummyData, just shortened 
    })
  }


  // methods


  
  clearCompleted = () => {
    this.setState({
      dummyData: this.state.dummyData.filter(item => !item.purchased)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
