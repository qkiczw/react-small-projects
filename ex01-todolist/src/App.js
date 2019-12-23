import React from 'react';
import styles from './App.module.css';
import ToDoList from './componenets/ToDoList/ToDoList';

const initialTasks = [
  {
    id: 1,
    name: 'Read a book',
    itemColor: 'important'   
  },
  {
    id: 2,
    name: 'Study ReactJs',
    itemColor: 'normal'   
  },
  {
    id: 3,
    name: 'Buy someting for dinner',
    itemColor: 'lowPriority'   
  },
];

class App extends React.Component {

  state = {
    tasks: [...initialTasks]
  }
  
  addItem = (e) => {
    e.preventDefault();
    const timeStampId = Date.now()
    const newItemToAdd = {
      id: timeStampId,
      name: e.target.taskName.value,
      itemColor: e.target.taskPriority.value
    }

    this.setState( prevState => ({
      tasks: [...prevState.tasks, newItemToAdd]
    }))
  }
    removeItem = (id) => {
      const postID = id;
      this.setState( prevState => ({
       tasks: [...prevState.tasks.filter( task=> task.id !== postID)]
      }))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <ToDoList 
          stateItems={this.state.tasks}
          addItem={this.addItem}
          removeItem={this.removeItem}
        />
      </div>
    );

  }
  
}

export default App;
