import ACTION_TYPE from "./actions"

const defaultState = {
    inputValue: '',
    list: []
}

const reducerFn = (state = defaultState, actions) => {
    if(actions.type === ACTION_TYPE.INPUT_VALUE_CHANGE) {
        return { ...state, inputValue: actions.inputValue }
    }
    if(actions.type === ACTION_TYPE.ADD_TODO_ITEM) {
        let { list, inputValue } = state;
        list.unshift({ value: inputValue, done: false, id: Date.now() })
        inputValue = ''
        return {
            list,
            inputValue
        }
    }
    if(actions.type === ACTION_TYPE.DEL_TODO_ITEM) {
        let { list } = state;
        list.splice(list.findIndex((item) => item.id === actions.id), 1)
        return { ...state, list }
    }
    if(actions.type === ACTION_TYPE.INIT_TODO) {
        return { ...actions.state }
    }
    if(actions.type === ACTION_TYPE.TOGGLE_TODO) {
        const { list } = state;
        list.forEach(item => {
            if(item.id === actions.id) {
                item.done = !item.done
            }
        })
        return { ...state, list }
    }
    return state
}


export default reducerFn