import React, { useState } from "react";
import { postUserProject } from "../../services/user_project/action";
import { useSelector, useDispatch } from "react-redux";
import ToastNotification from "../../comman/toast_notification";
import "./input.css";
function AddProject() {
  const [project_done, setProjectDone] = useState(false);
  const [project_name, setProjectName] = useState(null);
  const [project_description, setProjectDescription] = useState(null);
  const [start_date, setStartDate] = useState(null);
  const [end_date, setEndDate] = useState(null);
  const [project_status, setProjectStatus] = useState(null);
  const user_project = useSelector((state) => state.user_project);
  const dispatch = useDispatch();
  const on_submit = (event) => {
    event.preventDefault();
    dispatch(
      postUserProject({
        project_name: project_name,
        project_description: project_description,
        project_status: project_status,
        started_on: start_date,
        completion_date: end_date,
      })
    );
    setProjectName("");
    setProjectDescription("");
    setStartDate("");
    setEndDate("");
    setProjectStatus("");
    setProjectDone(true);
    // setProjectName(null);
    // setProjectDescription(null);
    // setStartDate(null);
    // setEndDate(null);
    // setProjectStatus(null);
  };
  return (
    <>
      {project_done ? (
        <ToastNotification
          class_name={"bg-success"}
          msg={"project add successfully"}
        />
      ) : (
        <></>
      )}
      <div className="row m-2">
        <div className="col-md-12">
          <div className="card mb-1">
            <div className="card-body" style={{ textAlign: "center" }}>
              <form>
                <h6>Add New Project</h6>
                <div className="row">
                  <div className="col-md-3">
                    <span className="input-group-text">Name</span>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => setProjectName(event.target.value)}
                      required
                      value={project_name}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <span className="input-group-text">
                      Project Description
                    </span>
                  </div>
                  <div className="col-md-7">
                    <textarea
                    value={project_description}
                      type="text"
                      className="form-control"
                      required="required"
                      onChange={(event) =>
                        setProjectDescription(event.target.value)
                      }
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <span className="input-group-text">Start Date</span>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="date"
                      className="form-control"
                      required="required"
                      onChange={(event) => setStartDate(event.target.value)}
                      value={start_date}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <span className="input-group-text">Completion Date</span>
                  </div>
                  <div className="col-md-7">
                    <input
                      type="date"
                      className="form-control"
                      required
                      onChange={(event) => setEndDate(event.target.value)}
                      value={end_date}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <span className="input-group-text">Project Status</span>
                  </div>
                  <div className="col-md-7">
                    <select
                      className="form-select"
                      required="required"
                      onChange={(event) => setProjectStatus(event.target.value)}
                      value={project_status}
                    >
                      <option value="select">--Select--</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Not Started">Not Started</option>
                      <option value="On Hold">On Hold</option>
                      <option value="Past Due">Past Due</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-3">
                    <button
                      disabled={
                        project_name === null ||
                        project_description === null ||
                        start_date === null ||
                        end_date === null ||
                        project_status === null
                      }
                      type="button"
                      className="btn btn-primary"
                      onClick={on_submit}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProject;
