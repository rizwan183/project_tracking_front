import "./App.css";
import Login from "./components/auth";
import Navbar from "./components/navbar";
import ProfileDetails from "./components/profile/profile_details";
import UserDashboard from "./components/user_dashboard/index";
import ViewProject from "./components/user_project/view_project";
import AddProject from "./components/user_project/add_project";
import AddTask from "./components/user_task/add_task";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const loginStatus = useSelector((state) => state.user);
  console.log("store", loginStatus);
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<UserDashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<ProfileDetails />} />
          <Route path="user-dashboard" element={<UserDashboard />} />
          <Route path="*" element={<div>No Page Found</div>} />
        </Routes>
      </BrowserRouter> */}
      {
      loginStatus.login_succeed?<>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route index element={<UserDashboard />} /> 
          <Route path="login" element={<Login />}/>
          <Route path="profile" element={<ProfileDetails />} />
          <Route path="user-dashboard" element={<UserDashboard />} /> 
          <Route path="project" element={<ViewProject />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="*" element={<div>No Page Found</div>} />
        </Routes>
      </BrowserRouter></>:<Login/>
      
    }
    </>
  );
}

export default App;
