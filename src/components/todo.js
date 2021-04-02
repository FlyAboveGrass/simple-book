import React, { Component } from 'react'
import store from '../store';
import { actionAddTodo, actionDelTodo, actionGetData, actionInputChange, actionToggleTodo } from '../store/actions';
import { todoAllSelector, todoDoneListSelector, todoListSelector } from '../store/selector';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this)
        // this.toggleTodoState = this.toggleTodoState.bind(this)
        this.state = {
            inputValue: '',
            list: []
        }
        this.inputValue = ''
        this.todoList = []
        this.todoListDone = []
        this.unSubscribe = store.subscribe(this.handleStateChange)
    }
    render() {
        return (
            <div>
                <div>
                    <input value={ this.state && this.state.inputValue } onChange={ (e) => this.inputChange(e) }></input>
                    <button onClick={this.addTodoList.bind(this)}>添加</button>
                </div>
                <br></br>
                未完成：
                <ul>
                    {
                        this.state.todoList && this.state.todoList.map((item, index) => <li key={ index } onClick={ this.toggleTodoState.bind(this, item.id)}>{ item.value } <button onClick={ this.delTodo.bind(this, item.id) }>删除</button></li>)
                    }
                </ul>
                <br></br>
                完成：
                <ul>
                    {
                        this.state.todoListDone && this.state.todoListDone.map((item, index) => <li key={ index } onClick={ this.toggleTodoState.bind(this, item.id)}>{ item.value } <button onClick={ this.delTodo.bind(this, item.id) }>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        store.dispatch(actionGetData())
    }

    handleStateChange(obj = store.getState()) {
        const state = { ...obj }
        console.log('state change', state);
        this.setState({
            state: state,
            state2: todoAllSelector(state),
            inputValue: state.inputValue,
            todoList: todoListSelector(state),
            todoListDone: todoDoneListSelector(state)
        })
        console.log(this.state.state && this.state.state.length, this.state.state2 && this.state.state.length);
    }

    inputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })
        store.dispatch(actionInputChange(e.target.value))
    }

    addTodoList() {
        // this.setState({
        //     list: [this.state.inputValue, ...this.state.list],
        //     inputValue: ''
        // })
        store.dispatch(actionAddTodo())
    }

    delTodo(id) {
        store.dispatch(actionDelTodo(id))
    }

    toggleTodoState(id) {
        store.dispatch(actionToggleTodo(id))
    }
    
}

export default Todo