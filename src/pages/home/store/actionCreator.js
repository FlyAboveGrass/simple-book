import { CHANGE_HOME_INFO, ADD_HOME_LIST, TOGGLE_SCROLL_TOP } from "./constant"
import axios from 'axios'

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data
            dispatch(changeHomeInfo(result))
        })
    }
}

export const changeHomeInfo = (result) => ({
    type: CHANGE_HOME_INFO,
    payload: {
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        showScroll: false
    }
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
    }
}

export const addHomeList = (list, nextPage) => {
    return {
        type: ADD_HOME_LIST,
        payload: {
            list,
            nextPage
        }
    }
}

export const toggleScrollTop = (showScroll) => {
    return {
        type: TOGGLE_SCROLL_TOP,
        payload: {
            showScroll
        }
    }
}