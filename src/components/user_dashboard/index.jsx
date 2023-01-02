import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserProject } from "../../services/user_project/action";
import { getUserTask } from "../../services/user_task/action";
ChartJS.register(ArcElement, Tooltip, Legend);
function UserDashboard() {
  const dispatch = useDispatch();
  var project_completed = 0;
  var project_inProgress = 0;
  var project_cancelled = 0;
  var project_onHold = 0;
  var project_pastDue = 0;
  var project_notStarted = 0;
  const user_project = useSelector((state) => state.user_project.data);
  const project_key_len = Object.keys(user_project).length;

  
  if (project_key_len !== 0) {
    project_completed = user_project.filter(
      (key) => key.project_status == "Completed"
    ).length;
    project_inProgress = user_project.filter(
      (key) => key.project_status == "In Progress"
    ).length;
    project_cancelled = user_project.filter(
      (key) => key.project_status == "Cancelled"
    ).length;
    project_onHold = user_project.filter(
      (key) => key.project_status == "On Hold"
    ).length;
    project_pastDue = user_project.filter(
      (key) => key.project_status == "Past Due"
    ).length;
    project_notStarted = user_project.filter(
      (key) => key.project_status == "Not Started"
    ).length;
  }
  const prject_data = {
    labels: [
      "Completed",
      "In Progress",
      "Cancelled",
      "On Hold",
      "Past Due",
      "Not Started",
    ],
    datasets: [
      {
        label: "total",
        data: [
          project_completed,
          project_inProgress,
          project_cancelled,
          project_onHold,
          project_pastDue,
          project_notStarted,
        ],
        backgroundColor: [
          "rgba(76,182,76)",
          "rgba(62, 60, 60)",
          "rgba(227, 80, 62)",
          "rgba(164, 194, 231)",
          "rgba(228, 211, 86)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(76,182,76, 1)",
          "rgba(243, 166, 56, 1)",
          "rgba(227, 80, 60, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const user_task = useSelector((state) => state.user_task.data);
  const task_key_len = Object.keys(user_task).length;

  var task_completed = 0;
  var task_inProgress = 0;
  var task_cancelled = 0;
  var task_onHold = 0;
  var task_pastDue = 0;
  var task_notStarted = 0;

  if (task_key_len !== 0) {
    task_completed = user_task.filter(
      (key) => key.task_status === "Completed"
    ).length;
    task_inProgress = user_task.filter(
      (key) => key.task_status === "In Progress"
    ).length;
    task_cancelled = user_task.filter(
      (key) => key.task_status === "Cancelled"
    ).length;
    task_onHold = user_task.filter(
      (key) => key.task_status === "On Hold"
    ).length;
    task_pastDue = user_task.filter(
      (key) => key.task_status === "Past Due"
    ).length;
    task_notStarted = user_task.filter(
      (key) => key.task_status === "Not Started"
    ).length;
  }
  const task_data = {
    labels: [
      "Completed",
      "In Progress",
      "Cancelled",
      "On Hold",
      "Past Due",
      "Not Started",
    ],
    datasets: [
      {
        label: "total",
        data: [
          task_completed,
          task_inProgress,
          task_cancelled,
          task_onHold,
          task_pastDue,
          task_notStarted,
        ],
        backgroundColor: [
          "rgba(76,182,76)",
          "rgba(62, 60, 60)",
          "rgba(227, 80, 62)",
          "rgba(164, 194, 231)",
          "rgba(228, 211, 86)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(76,182,76, 1)",
          "rgba(243, 166, 56, 1)",
          "rgba(227, 80, 60, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    dispatch(getUserProject());
    dispatch(getUserTask())
  }, [dispatch, 0]);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 1,
        left: 15,
        right: 15,
        bottom: 15,
      },
    },
  };
  
  return (
    <>
      <div className="row m-2">
        <div className="chart-app col-md-6">
          <div className="card mb-1">
            <div className="card-body chart-bar">
              <h6 style={{ textAlign: "center" }}>Projects</h6>
              <Pie data={prject_data} options={options} />
            </div>
          </div>
        </div>
        <div className="chart-app col-md-6">
          <div className="card mb-1">
            <div className="card-body chart-bar">
              <h6 style={{ textAlign: "center" }}>Tasks</h6>
              <Pie data={task_data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserDashboard;
