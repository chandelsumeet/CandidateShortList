import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SelectedCandidate.css";
const SelectedCandidate = () => {
  const dispatch = useDispatch();
  const selectedCandidate = useSelector(
    (state) => state.users.selectedCandidate
  );
  return (
    <div className="profile-card-container">
      {selectedCandidate.map((obj) => {
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
export default SelectedCandidate;
