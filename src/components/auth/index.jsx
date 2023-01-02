import React, { useState } from "react";
import "./index.css";

import { setEmailLogIn } from "../../services/auth/action";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.user);
  console.log("store", loginStatus);
  const on_submit = () => {
    console.log("email", email);
    console.log("password", password);
    dispatch(
      setEmailLogIn({
        email: email,
        password: password,
      })
    );
  };
  return (
    <>
      
      {loginStatus.login_failed ? (
        <div class="toast fade show" id="myToast">
          <div class="toast-header">
            <strong class="me-auto">
              <i class="bi-gift-fill msg"></i> Email Or Password Error
            </strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="login-div container d-flex justify-content-center align-items-center">
        <div className="login">
          <div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
                Email
              </label>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-3 col-form-label"
              >
                Password
              </label>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mb-3 btn btn-primary d-flex justify-content-center"
              onClick={on_submit.bind(this)}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
