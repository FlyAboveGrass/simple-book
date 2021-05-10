import { fromJS } from 'immutable'
import { ADD_HOME_LIST, CHANGE_HOME_INFO, TOGGLE_SCROLL_TOP } from './constant'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1
})

const reducer = (state = defaultState, action) => {
    console.log('action.payload.list', action.payload?.list);
    switch(action.type) {
        case CHANGE_HOME_INFO:
            return state.merge(action.payload)
        case ADD_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.payload.list),
                articlePage: action.payload.nextPage
            })
        case TOGGLE_SCROLL_TOP:
            return state.merge({
                showScroll: action.payload.showScroll
            })
        default:
            return state
    }
}

export default reducer