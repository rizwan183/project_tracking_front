import { UserTask,AddUserTask } from "./requests";
import * as types from "./types";
export const getUserTask = () => async (dispatch) => {
  console.log("UserTask")
  dispatch({ type: types.USER_TASK_REQUESTED });
  await UserTask()
    .then((response) => {
      dispatch({ type: types.USER_TASK_SUCCEEDED, payload: response.data.data });
    })
    .catch((error) => {
      console.log("error",error)
      dispatch({ type: types.USER_TASK_FAILURE });
    });
};

export const postUserTask=(body)=>async (dispatch)=>{
  console.log("add ")
}