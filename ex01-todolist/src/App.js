import React from 'react';
import './App.css';
import ToDoList from './componenets/ToDoList/ToDoList';

const initialState = [
  {
    id: 1,
    name: 'Read a book',
    color: 'red'   
  },
  {
    id: 2,
    name: 'Study ReactJs',
    color: 'green'   
  },
  {
    id: 3,
    name: 'Buy someting for dinner',
    color: 'yellow'   
  },
];

class App extends React.Component {

  state = {
    items: [...initialState]
  }
  
  render() {
    return (
      <div className="App">
        <ToDoList stateItems={this.state.items}/>
      </div>
    );

  }
  
}

export default App;
