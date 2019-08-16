import React from 'react';
import Task from './Task'

const TaskList = (props) => {

    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={s.delete} change={props.change} />)
    return (
        <>
        <div className= "active">
           <h1> TO DO TASKS LIST</h1>
           {tasks}
           
        </div>
        <hr/>

        <div className="done">
            <h2>Completed tasks (0)</h2>
        </div>
        </>


    )
}

export default TaskList