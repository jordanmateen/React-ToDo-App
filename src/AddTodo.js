import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content : ''
    }

    handleChange = (e)=> {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content : ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add Todo</label>
                    <input type = "text" onChange = {this.handleChange} value = {this.state.content}/>
                </form>

                <button onClick = {this.handleSubmit} class="btn pulse waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>
        )
    }
}

export default AddTodo