import instance from "../../axios/index";

import store from "../../store/configureStore";
export const UserProject = async () => {
  const token = store.getState().user.data.token.access;
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return await instance.get("/project", { headers: header });
};

export const AddUserProject = async (body) => {
  const token = store.getState().user.data.token.access;
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log("add project body",body)
  return await instance.post("/project/", body,{ headers: header });
};
