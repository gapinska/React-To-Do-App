import React from 'react';

const Task = (props) =>{
    const style = {
        color: 'red',
    }
    const {text, date, id, active, important} = props.task

    if(active){

    return (
       <div>
           <p>
               <strong style={important ? style : null }>{text}</strong> - <span>{date} </span>
               <button onClick={() => props.change(id)}>Completed</button>
               <button onClick={() => props.delete(id)}>X</button> 
           </p>
           

       </div>
    )
}else{
    return (
        <div>task completed</div>
    )
}}

export default Task