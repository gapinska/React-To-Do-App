import React, {Component} from 'react'


class AddTask extends Component{
    state = {
        text: ''
    }
    render(){
        return(
            <>
            <div className="form">
                <input type="text" placeholder="add task" value={this.state.text}/>
                
            </div>
            <hr/>
            </>
        )
    }
}

export default AddTask

