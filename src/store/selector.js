import { createSelector } from 'reselect'

const todoListSelector = (state) => state.list.filter(item => !item.done)
const todoDoneListSelector = (state) => state.list.filter(item => item.done)

const todoAllSelector = createSelector(
    [todoListSelector, todoDoneListSelector],
    (a, b) => {
        console.log('all selector arr', a, b);
        return a.concat(b)
    }
)

export {
    todoAllSelector,
    todoListSelector,
    todoDoneListSelector
}