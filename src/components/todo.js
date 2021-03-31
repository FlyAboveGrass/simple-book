import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [
                'ok'
            ]
        }
    }
    render() {
        return (
            <div>
                <div>
                    <input value={ this.state.inputValue } onChange={ (e) => this.inputChange(e) }></input>
                    <button onClick={this.addTodoList.bind(this)}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => <li key={ index }>{ item } <button onClick={ this.delTodo.bind(this, index) }>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }

    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    addTodoList() {
        this.setState({
            list: [this.state.inputValue, ...this.state.list],
            inputValue: ''
        })
    }

    delTodo(index) {
        const list = [...this.state.list];
        list.splice(index, 1)
        console.log('list', list);
        this.setState({
            list: list
        })
    }
}

export default Todo