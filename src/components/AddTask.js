import React, {Component} from 'react';
import './AddTask.css'


class AddTask extends Component{
    state = {
        text: '',
        checked: false
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
                <input type="date" value="2019-01-25" min="2019-01-01"/>
                <button>Add</button>


                
            </div>
            <hr/>
            </>
        )
    }
}

export default AddTask

