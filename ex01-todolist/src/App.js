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
  
  addItem =(e) => {
    e.preventDefault();
    const timeStampId = Date.now()
    const newItemToAdd = {
      id: timeStampId,
      name: e.target.taskName.value,
      itemColor: e.target.taskPriority.value
    }

    this.setState( prevState => ({
      items: [...prevState.items, newItemToAdd]
    }))
    console.log('This will Add new Task');
    console.log(newItemToAdd);
  }

  render() {
    return (
      <div className="App">
        <ToDoList 
          stateItems={this.state.items}
          addItem={this.addItem}  
        />
      </div>
    );

  }
  
}

export default App;
