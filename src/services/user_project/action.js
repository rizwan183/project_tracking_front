import { UserProject,AddUserProject } from "./requests";
import * as types from "./types";
export const getUserProject = () => async (dispatch) => {
  console.log("getUserProject")
  dispatch({ type: types.USER_PROJECT_REQUESTED });
  await UserProject()
    .then((response) => {
      dispatch({ type: types.USER_PROJECT_SUCCEEDED, payload: response.data.data });
    })
    .catch((error) => {
      console.log("error",error)
      dispatch({ type: types.USER_PROJECT_FAILURE });
    });
};

export const postUserProject=(body)=>async (dispatch)=>{
  console.log("add project body",body)
  dispatch({type:types.USER_ADD_PROJECT_REQUESTED})
  await AddUserProject(body).then((response)=>{
    dispatch({type:types.USER_ADD_PROJECT_SUCCEEDED})
  }).catch((error)=>{
    dispatch({type:types.USER_ADD_PROJECT_FAILURE})
  })
}