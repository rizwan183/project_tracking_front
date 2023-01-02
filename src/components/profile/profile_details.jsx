import React, { useEffect, useState } from "react";
import "./profile_details.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../services/profile/action";
function ProfileDetails() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const length = Object.keys(profile).length;

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <>
      {length == 0 ? (
        <></>
      ) : (
        <div className="row m-5">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                />
                <h5 className="my-3">{profile.name}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">
                    Edit Profile
                  </button>
                  <button type="button" class="btn btn-outline-primary ms-1">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{profile.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{profile.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Account Status</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {profile.is_active.toString()}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Is Admin</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {profile.is_admin.toString()}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Created At</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{profile.created_at}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProfileDetails;
