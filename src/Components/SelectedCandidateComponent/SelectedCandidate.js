import React, { useEffect, useState } from "react";
import "./SelectedCandidate.css";
const SelectedCandidate = () => {
  const candidates = JSON.parse(localStorage.getItem("selectedData"));
  console.log(candidates);
  return (
    <div className="profile-card-container">
      {candidates.map((obj) => {
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
