import React from "react";
function ToastNotification({ class_name, msg }) {
  console.log("class name,msg", class_name, msg);
  return (
    <div class={`toast show m-2 ${class_name} p-1`}>
      <div class="toast-header">
        <strong class="me-auto">Status</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
        ></button>
      </div>
      <div class={`toast-body`}>
        <p> {msg} </p>
      </div>
    </div>
  );
}

export default ToastNotification;
