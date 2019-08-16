import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component{

  state = {
    tasks: [{
      id: 0,
      text: 'clean the house',
      date: '2018-02-15',
      important: true,
      active: true,
      finishDate: null

    },
    {
      id: 1,
      text: 'do launderette',
      date: '2018-01-10',
      important: true,
      active: true,
      finishDate: null

    }
  
  ]
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


  render() {
    return(
      <div className="App">
        <h1>TO-DO APP</h1>
        <AddTask/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
