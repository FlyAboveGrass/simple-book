import { put, takeEvery } from 'redux-saga/effects'
import ACTION_TYPE, { actionSetTodo } from './actions'

// 模拟获取数据
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                code: 0,
                data: {
                    inputValue: 'yibu',
                    list: [
                        { done: false, value: '1', id: Date.now()},
                        { done: false, value: '2', id: Date.now()+1},
                        { done: true, value: '13', id: Date.now()+2}
                    ]
                }
            })
        })
    })
}

function* handleData() {
    /**
     * 下面的方法是thunk 的，在saga中不可行
     * 1. saga中并没有传递dispatch和getState 方法到中间件中. 在saga中要发action 要通过saga helper 中的 put 方法
     * 2. saga中处理异步采用的是 generator 函数的写法， promise 和 async/await 是不适用的
     * 3. 可以直接在generator 函数之中进行 try-catch 处理异常
     */
    // getData().then(res => {
    //     store.dispatch(actionSetTodo(res.data))
    // })


    try {
        let res = yield getData()
        let setAction = actionSetTodo(res.data)
        yield put(setAction)
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
    
}

function* todoSaga() {
    yield takeEvery(ACTION_TYPE.GET_DATA, handleData)
}

export default todoSaga