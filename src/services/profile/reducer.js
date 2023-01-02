import * as types from './types';

const initialState = {
    profile_loading: false,
    profile_succeed: false,
    profile_failed: false,
    data: {},
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.PROFILE_REQUESTED:
            return {
                ...state,
                profile_loading: true,
                profile_succeed: false,
                profile_failed: false,
            }
        case types.PROFILE_SUCCEEDED:
            return {
                ...state,
                profile_loading: false,
                profile_succeed: true,
                profile_failed: false,
                data:action.payload
            }
        case types.PROFILE_FAILURE:
            return {
                ...state,
                profile_loading: false,
                profile_succeed: false,
                profile_failed: true
            }
        default: return state
    }
}
