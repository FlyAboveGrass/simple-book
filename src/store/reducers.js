import ACTION_TYPE from "./actions"

const defaultState = {
    inputValue: '12',
    list: [1,2,3]
}

const reducerFn = (state = defaultState, actions) => {
    if(actions.type === ACTION_TYPE.INPUT_VALUE_CHANGE) {
        return { ...state, inputValue: actions.inputValue }
    }
    if(actions.type === ACTION_TYPE.ADD_TODO_ITEM) {
        let { list, inputValue } = state;
        list.unshift(inputValue)
        inputValue = ''
        return {
            list,
            inputValue
        }
    }
    if(actions.type === ACTION_TYPE.DEL_TODO_ITEM) {
        let { list } = state;
        list.splice(actions.index, 1)
        return { ...state, list }
    }
    if(actions.type === ACTION_TYPE.INIT_TODO) {
        return { ...actions.state }
    }
    return state
}


export default reducerFn