import React from 'react';

const Task = (props) =>{
    const {text, date} = props.task

    return (
       <div>
           <p>
               <strong>{text}</strong> - <span>{date} </span>
               <button>Completed</button>
                <button>X</button> 
           </p>
           

       </div>
    )
}

export default Task