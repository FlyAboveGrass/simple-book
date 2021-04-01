const ACTION_TYPE = {
    INPUT_VALUE_CHANGE: 'input_value_change',
    ADD_TODO_ITEM: 'add_todo_item',
    DEL_TODO_ITEM: 'del_todo_item',
    INIT_TODO: 'init_todo'
}


function actionInputChange(inputValue) {
    return {
        type: ACTION_TYPE.INPUT_VALUE_CHANGE,
        inputValue
    }
}

function actionAddTodo() {
    return {
        type: ACTION_TYPE.ADD_TODO_ITEM
    }
}

function actionSetTodo(state) {
    return {
        type: ACTION_TYPE.INIT_TODO,
        state
    }
}

function actionInitTodo() {
    return (dispatch, getState) => {
        getData().then((res) => {
            dispatch(actionSetTodo(res.data))
        })
    }
}


// 模拟获取数据
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                code: 0,
                data: {
                    inputValue: 'yibu',
                    list: [1,2,3,4]
                }
            })
        })
    })
}

function actionDelTodo(index) {
    return {
        type: ACTION_TYPE.DEL_TODO_ITEM,
        index
    }
}


export default ACTION_TYPE
export {
    actionInputChange,
    actionAddTodo,
    actionDelTodo,
    actionInitTodo,
    actionSetTodo
}