import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RejectedCandidate.css";
const RejectedCandidate = () => {
  const dispatch = useDispatch();
  const rejectedCandidate = useSelector(
    (state) => state.users.rejectedCandidate
  );
  return (
    <div className="profile-card-container">
      {rejectedCandidate.map((obj) => {
        const { Image, id, name } = obj;
        return (
          <div key={id} className="profile-card">
            <img src={Image} alt="" />
            <h3>{name}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default RejectedCandidate;
