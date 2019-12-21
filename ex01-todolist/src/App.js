import React from 'react';
import './App.css';
import ToDoList from './componenets/ToDoList/ToDoList';

const initialState = [
  {
    id: 1,
    name: 'Read a book',
    itemColor: 'red'   
  },
  {
    id: 2,
    name: 'Study ReactJs',
    itemColor: 'green'   
  },
  {
    id: 3,
    name: 'Buy someting for dinner',
    itemColor: 'blue'   
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
