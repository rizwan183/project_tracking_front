import instance from "../../axios/index";

import store from '../../store/configureStore'
export const UserTask = async () => {
  const token = store.getState().user.data.token.access;
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return await instance.get("/task/task",{headers:header});
};

export const AddUserTask =async(body)=>{
  const token = store.getState().user.data.token.access;
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log("add user body",body)
  return await instance.post("/project/project",body,{headers:header});
}
