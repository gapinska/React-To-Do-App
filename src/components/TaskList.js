import React from 'react';
import Task from './Task'

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
        <div className= "active">
           <h1> TO DO TASKS LIST</h1>
           {activeTasks.length > 0 ? activeTasks : <p> no tasks to do</p>}
           
        </div>
        <hr/>

        <div className="done">
            <h2>Completed tasks <em>({done.length})</em></h2>
            {done.length>5 && <span style={{fontSize: "10px"}} >your last 5 tasks</span>}
            {doneTasks.slice(0,5)}
        </div>
        </>


    )
}

export default TaskList