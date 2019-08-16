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

    }]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)

    this.setState({
      tasks
    })

  }
  changeTaskStatus = () => {
    let tasks = Array.from(this.state.task)
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
        TODO APP
        <AddTask/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    )
  }
}

export default App;
