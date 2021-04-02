import React, { Component } from 'react'
import store from '../store';
import { actionAddTodo, actionDelTodo, actionGetData, actionInputChange } from '../store/actions';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.handleStateChange = this.handleStateChange.bind(this)
        this.unSubscribe = store.subscribe(this.handleStateChange)
        
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

    componentDidMount() {
        store.dispatch(actionGetData())
    }

    handleStateChange() {
        console.log('store change', store.getState());
        this.setState(store.getState())
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

    delTodo(index) {
        store.dispatch(actionDelTodo(index))
    }




    
}

export default Todo