import React ,{useEffect,useState} from "react";
import { getUserProject } from "../../services/user_project/action";
import { useDispatch, useSelector } from "react-redux";

function AddTask() {
  const dispatch = useDispatch();
  const [selected_task,setSelectedTask]=useState(null)
  const [task_name, setTaskName] = useState(null);
  const [task_description, setTaskDescription] = useState(null);
  const [task_start_date, setTaskStartDate] = useState(null);
  const [task_end_date, setTaskEndDate] = useState(null);
  const [task_status, setTaskStatus] = useState(null);
  const user_project = useSelector((state) => state.user_project.data);
  const filter_data=user_project.filter(data=>data.project_status!=="Cancelled" && data.project_status!=="Completed")
  useEffect(() => {
    dispatch(getUserProject());
  }, [dispatch, 0]);

  const on_submit=()=>{
    console.log(selected_task,task_name,task_description,task_start_date,task_end_date,task_status)
  }

  return (
    <div className="row m-2">
      <div className="col-md-12">
        <div className="card mb-1">
          <div className="card-body" style={{ textAlign: "center" }}>
            <>
              <h6>Add New Task</h6>
              <div className="row">
                <div className="col-md-3">
                  <span className="input-group-text">Project</span>
                </div>
                <div className="col-md-7">
                  <select className="form-select" required onChange={(event) => setSelectedTask(event.target.value)}>
                    <option value="select">--Select--</option>
                    {
                      filter_data.map((project)=>{
                        return <option value={project.uuid}>{project.project_name}</option>
                      })
                    }
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3">
                  <span class="input-group-text">Name</span>
                </div>
                <div className="col-md-7">
                  <input type="text" className="form-control" required onChange={(event) => setTaskName(event.target.value)}/>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3">
                  <span className="input-group-text">Task Description</span>
                </div>
                <div className="col-md-7">
                  <textarea type="text" className="form-control" required onChange={(event) => setTaskDescription(event.target.value)}/>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3">
                  <span class="input-group-text">Start Date</span>
                </div>
                <div className="col-md-7">
                  <input type="date" className="form-control" required onChange={(event) => setTaskStartDate(event.target.value)}/>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3">
                  <span className="input-group-text">Completion Date</span>
                </div>
                <div className="col-md-7">
                  <input type="date" className="form-control" required onChange={(event) => setTaskEndDate(event.target.value)}/>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3">
                  <span className="input-group-text">Task Status</span>
                </div>
                <div className="col-md-7">
                  <select className="form-select" required onChange={(event) => setTaskStatus(event.target.value)}>
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
                  <button type="button" className="btn btn-primary" onClick={on_submit}>
                    SUBMIT
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTask;
