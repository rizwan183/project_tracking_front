import { combineReducers } from 'redux';
import auth from '../services/auth/reducer'
import profile from '../services/profile/reducer'
import user_project from '../services/user_project/reducer'
import user_task from '../services/user_task/reducer'
export const reducers = combineReducers({
    user:auth,
    profile:profile,
    user_project:user_project,
    user_task:user_task
})