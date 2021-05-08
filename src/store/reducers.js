import { combineReducers } from 'redux-immutable'
import  { reducer as headerReducer } from '../common/header/store'


const reducers = combineReducers({
    header: headerReducer
})

export default reducers