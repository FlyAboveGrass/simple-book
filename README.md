## saga的使用

1. 定义一个sagas.js存放 saga 异步函数。 必须返回一个 generator 函数
2.  在store 中引入 createSagaMiddleware 函数，执行这个函数创建saga中间件。然后在createStore 中使用这个中间件。最后还要调用创建出来的 saga中间件的 run（） 方法
3. 在saga.js中去定义自己的异步函数。 首先监听action， 监听到action之后执行自定义的处理函数， 处理完成时候调用 yield put 发起自己的action 给reducer 函数去改变state状态。

1. saga中并没有传递dispatch和getState 方法到中间件中. 在saga中要发action 要通过saga helper 中的 put 方法

2. saga中处理异步采用的是 generator 函数的写法， promise 和 async/await 是不适用的

3. 可以直接在generator 函数之中进行 try-catch 处理异常