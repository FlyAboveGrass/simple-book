import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import todoSaga from './saga'

const saga = createSagaMiddleware()



const store = createStore(reducer, applyMiddleware(saga))
saga.run(todoSaga)

export default store