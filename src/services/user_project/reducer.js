import * as types from "./types";

const initialState = {
  user_project_loading: false,
  user_project_succeed: false,
  user_project_failed: false,
  user_add_project_loading: false,
  user_add_project_succeed: false,
  user_add_project_failed: false,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_PROJECT_REQUESTED:
      return {
        ...state,
        user_project_loading: true,
        user_project_succeed: false,
        user_project_failed: false,
      };
    case types.USER_PROJECT_SUCCEEDED:
      return {
        ...state,
        user_project_loading: false,
        user_project_succeed: true,
        user_project_failed: false,
        data: action.payload,
      };
    case types.USER_PROJECT_FAILURE:
      return {
        ...state,
        user_project_loading: false,
        user_project_succeed: false,
        user_project_failed: true,
      };
    case types.USER_ADD_PROJECT_REQUESTED:
      return {
        ...state,
        user_add_project_loading: true,
        user_add_project_succeed: false,
        user_add_project_failed: false,
      };
    case types.USER_ADD_PROJECT_SUCCEEDED:
      return {
        ...state,
        user_add_project_loading: false,
        user_add_project_succeed: true,
        user_add_project_failed: false,
      };
    case types.USER_ADD_PROJECT_FAILURE:
      return {
        ...state,
        user_add_project_loading: false,
        user_add_project_succeed: false,
        user_add_project_failed: true,
      };
    default:
      return state;
  }
};
