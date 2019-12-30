import React from 'react';
import styles from './App.module.css';
import ToDoList from './componenets/ToDoList/ToDoList';

const initialTasks = [
  {
    id: 1,
    name: 'Read a book',
    itemColor: 'important',
    isDone: false,   
  },
  {
    id: 2,
    name: 'Study ReactJs',
    itemColor: 'normal',
    isDone: false,   
  },
  {
    id: 3,
    name: 'Buy something for dinner',
    itemColor: 'lowPriority',
    isDone: true,   
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
      itemColor: e.target.taskPriority.value,
      isDone: false,
    }

    this.setState( prevState => ({
      tasks: [...prevState.tasks, newItemToAdd]
    }))
  }
  removeItem = (id) => {
      const postID = id;
      this.setState( prevState => ({
       tasks: [...prevState.tasks.filter( task=> task.id !== postID)]
      }));
  }
  taskIsDone = (id, isDone) => {
    const taskStateIndex = this.state.tasks.findIndex( stateTask => stateTask.id === id );
    console.log('this tast is done?', isDone);
    console.log('nr z tablicy to: ', taskStateIndex)
    console.log(this.state.tasks[taskStateIndex].isDone)
    
    this.setState(prevState => { //nie wiem czy ten sposób jest dobry :/
      const cloneTasksState = [...prevState.tasks];
      const isTaskDone = cloneTasksState[taskStateIndex].isDone === true ? false : true; 
      cloneTasksState[taskStateIndex].isDone = isTaskDone;
      return {tasks: cloneTasksState};
  })

  console.log(this.state)
    //TODO: zmienna taskStateIndex zwara index tasku w tablicy i teraz jak isDone w tym 
    //obiekcie zmienić za pomocą setState

  }


  render() {
    return (
      <div className={styles.wrapper}>
        <ToDoList 
          stateItems={this.state.tasks}
          addItem={this.addItem}
          removeItem={this.removeItem}
          taskIsDone={this.taskIsDone}
        />
      </div>
    );

  }
  
}

export default App;
