import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
  }

  addNewTodo(newTodo) {
    this.setState((prev) => ({
      todos: prev.todos.concat(newTodo),
    }))
  }
  render() {
    return (
      <main>
        <TodoInput addNewTodo={this.addTodo}></TodoInput>
        <TodoList todos={this.state.todos}></TodoList>
      </main>
    )
  }
}


// import React, { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <div>Counter: {counter}</div>
//       <button type="button" onClick={() => setCounter(counter + 1)}>
//         Increase Counter
//       </button>
//     </div>
//   );
// }

// export default App;
