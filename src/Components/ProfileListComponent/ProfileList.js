import { findByPlaceholderText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUsers } from "../../redux/actions/users";
import ProfileCard from "../ProfileCardComponent/ProfileCard";

import "./ProfileList.css";
const ProfileList = ({ match }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    if (users.length !== 0) {
      return;
    }
    dispatch(getUsers());
  }, []);

  return (
    <>
      <h1>Candidates List</h1>
      <div>
        <form>
          <div className="form-control">
            <input type="search" />
            <button className="btn-search">Search</button>
          </div>
        </form>
      </div>
      <div className="profile-card-container">
        {users.map((profile) => {
          return <ProfileCard key={profile.id} profileInfo={profile} />;
        })}
      </div>
    </>
  );
};

export default ProfileList;
