import { Login } from "./requests";
import * as types from "./types";
export const setEmailLogIn = (body) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUESTED });
  await Login(body)
    .then((response) => {
      dispatch({ type: types.LOGIN_SUCCEEDED, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};
