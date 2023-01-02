import * as types from './types';

const initialState = {
    user_task_loading: false,
    user_task_succeed: false,
    user_task_failed: false,
    user_add_task_loading:false,
    user_add_task_succeed:false,
    user_add_task_failed:false,
    data: {},
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.USER_TASK_REQUESTED:
            return {
                ...state,
                user_task_loading: true,
                user_task_succeed: false,
                user_task_failed: false,
            }
        case types.USER_TASK_SUCCEEDED:
            return {
                ...state,
                user_task_loading: false,
                user_task_succeed: true,
                user_task_failed: false,
                data:action.payload
            }
        case types.USER_TASK_FAILURE:
            return {
                ...state,
                user_task_loading: false,
                user_task_succeed: false,
                user_task_failed: true
            }

        case types.USER_ADD_TASK_REQUESTED:
            return{
                ...state,
                user_add_task_loading:true,
                user_add_task_succeed:false,
                user_add_task_failed:false
            }
        case types.USER_ADD_TASK_SUCCEEDED:
            return{
                ...state,
                user_add_task_loading:false,
                user_add_task_succeed:true,
                user_add_task_failed:false
            }
        case types.USER_ADD_TASK_FAILURE:
            return{
                ...state,
                user_add_task_loading:false,
                user_add_task_succeed:false,
                user_add_task_failed:true
            }
        
        default: return state
    }
}
