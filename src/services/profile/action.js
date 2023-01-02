import { Profile } from "./requests";
import * as types from "./types";
export const getProfile = () => async (dispatch) => {
  console.log("in get profile")
  dispatch({ type: types.PROFILE_REQUESTED });
  await Profile()
    .then((response) => {
      dispatch({ type: types.PROFILE_SUCCEEDED, payload: response.data.data });
    })
    .catch((error) => {
      console.log("error",error)
      dispatch({ type: types.PROFILE_FAILURE });
    });
};
