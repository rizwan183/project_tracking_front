import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const on_logout = () => console.log("log out");
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/profile">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/user-dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/profile"
                role="button"
                data-bs-toggle="dropdown"
              >
                Manage Project
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/project">
                    View All Project
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/add-project">
                    Add Project
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/profile"
                role="button"
                data-bs-toggle="dropdown"
              >
                Manage Task
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    View All Task
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/add-task">
                    Add Task
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <button
              className="btn btn-primary"
              type="button"
              onClick={on_logout.bind()}
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
