import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actionType'

export const addTask = (title) => ({
    type: ADD_TASK,
    payload: {
        id: Date.now().toString(),
        title,
        isCompleted: false
    }
})

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: {id}
})

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {id}
})