import * as types from './types';

const initialState = {
    login_loading: false,
    login_succeed: false,
    login_failed: false,
    data: {},
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUESTED:
            return {
                ...state,
                login_loading: true,
                login_succeed: false,
                login_failed: false,
            }
        case types.LOGIN_SUCCEEDED:
            return {
                ...state,
                login_loading: false,
                login_succeed: true,
                login_failed: false,
                data:action.payload
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                login_loading: false,
                login_succeed: false,
                login_failed: true
            }
        default: return state
    }
}
