import React, {Component} from 'react';
import './AddTask.css';
import Moment from 'react-moment';
import 'moment-timezone';


class AddTask extends Component{
    state = {
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0,10)
    }
    
    render(){
        return(
            <>
            <div className="form">
                <input type="text" placeholder="add task" value={this.state.text}/>
                <input type="checkbox" checked={this.state.checked} id="important" />
                <label htmlFor="important">Priority</label>
                <br/>
                <label htmlFor="date">Deadline </label>
                <input type="date" value={this.state.date} min="2019-01-01" max="2020-12-31"/>
                <button>Add</button>


                
            </div>
            <hr/>
            </>
        )
    }
}

export default AddTask

