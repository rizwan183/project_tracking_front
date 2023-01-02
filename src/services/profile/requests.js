import instance from "../../axios/index";

import store from '../../store/configureStore'
export const Profile = async () => {
  const token = store.getState().user.data.token.access;
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return await instance.get("/auth/profile/",{headers:header});
};
