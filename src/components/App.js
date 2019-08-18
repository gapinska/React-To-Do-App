import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { ok } from 'assert';

class App extends Component{
  counter = 0

  state = {
    tasks: []
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)

    this.setState({
      tasks
    })

  }
  changeTaskStatus = (id) => {
    let tasks = Array.from(this.state.tasks)
    tasks.forEach(task =>{
      if (task.id === id){
        task.active = false
        task.finishDate= new Date().getTime()
      }
    })
    this.setState({
      tasks
    })

  }
  addTask = (text, date, important) => {
    const task ={
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
  
  }
  this.counter++  
  this.setState(prevState => ({
    tasks: [...prevState.tasks, task]
  }))

  return true
  }


  render() {
    return(
      <div className="App">
        <h1>TO-DO APP</h1>
        <AddTask addTask={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
