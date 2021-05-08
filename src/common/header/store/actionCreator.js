import * as constants from './constant'


export const changePage  =  (page) => ({
    type: constants.CHANGE_PAGE,
    page
})