import React,{Component} from 'react'

class TodoInput extends Component{
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.state={
            inputValue: "",
        }
    }
        handleChange(e){
            this.setState({
                inputValue:e.target.value,
            })

        }

    
    handleClick(){
        const inputValue=this.state.inputValue
        this.props.addTodo(inputValue)
    }
    render(){
        return(
            <div className="TodoInput">
            <input placeholder="Please input new TODO" 
            value={this.state.inputValue}
                onChange={this.handleChange}/>
            <button onClick={this.handleClick}>click!</button>
            </div>
        )
    }
}

export default TodoInput