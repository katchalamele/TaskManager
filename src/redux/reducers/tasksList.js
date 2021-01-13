import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../actionType'

const defaultState = [{id: Date.now().toString(), title: 'Ma tachess', isCompleted: false}]

export const tasksList = (state = defaultState, action) => {
    switch(action.type){
        case ADD_TASK:
            return [action.payload, ...state]
        
        case TOGGLE_TASK:
            return state.map(task => task.id === action.payload.id ? {id: task.id, title: task.title, isCompleted: !task.isCompleted} : task)
        
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id && task)

        default:
            return state
    }
}