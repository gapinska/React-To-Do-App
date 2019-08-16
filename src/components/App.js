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


  render() {
    return(
      <div className="App">
        TODO APP
        <AddTask/>
        <TaskList tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
