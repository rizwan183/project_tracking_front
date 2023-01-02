import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProject } from "../../services/user_project/action";
import "./table.css";
function ViewProject() {
  const dispatch = useDispatch();
  const user_project = useSelector((state) => state.user_project.data);
  const [status,setStatus]=useState(null);
  const [filter_data,setFilterData]=useState(user_project);
  useEffect(() => {
    dispatch(getUserProject());
  }, [dispatch, 0]);
  const on_reset=()=>{
    setFilterData(user_project)
    setStatus("Any")
    document.getElementById('project_status_select').value = 'Any';
  }
  const on_search=()=>{
    if (status==="Any"){
      
      setFilterData(user_project)
    }
    else{
      setFilterData(user_project.filter(data=>data.project_status===status))
    }
    
  }
  return (
    <>
      <div className="row m-2">
        <div className="col-md-12">
          <div className="card mb-1">
            <div className="card-body">
              <h6 style={{ textAlign: "center" }}>Project By Filter</h6>
              <div className="row">
                <div className="col-md-12">
                  <label>Status</label>
                  <br />
                  <select id ='project_status_select' className="form-select mt-3" onClick={event=>setStatus(event.target.value)}>
                    <option value="Any">Any</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Not Started">Not Started</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Past Due">Past Due</option>
                  </select>
                </div>
                {/* <div className="col-md-4">
                  <label>Date From</label>
                  <br />
                  <input className="form-select mt-3" type="date" onChange={event=>setFromDate(event.target.value)}></input>
                </div>
                <div className="col-md-4">
                  <label>Date To</label>
                  <br />
                  <input className="form-select mt-3" type="date" onChange={event=>setToDate(event.target.value)}></input>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-1 mt-2">
                  <button type="button" className="btn btn-primary" onClick={on_search}>
                    Search
                  </button>
                </div>
                <div className="col-md-1 mt-2">
                  <button type="button" className="btn btn-primary" onClick={on_reset}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body table-wrapper">
              <table
                className="table table-responsive table-earnings"
                id="table"
                data-toggle="table"
                data-search="true"
                data-filter-control="true"
                data-show-export="true"
                data-show-refresh="true"
                data-show-toggle="true"
                data-pagination="true"
                data-toolbar="#toolbar"
                data-page-size="5"
              >
                <thead
                  className="table-success"
                  style={{ position: "sticky", top: 0 }}
                >
                  <tr>
                    <th>Project Name</th>
                    <th>Start Date</th>
                    <th>Completion Date</th>
                    <th>Project Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filter_data.map((project) => {
                    return (
                      <tr>
                        <td>{project.project_name}</td>
                        <td>{project.started_on}</td>
                        <td>{project.completion_date}</td>
                        <td>{project.project_status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewProject;
