import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { Image, id, name } = props.profileInfo;
  return (
    <div className="profile-card">
      <img src={Image} alt="" />
      <h3>{name}</h3>
      <Link className="profile-detail-link" to={`/profileDetail/${id}`}>
        Profile Details
      </Link>
    </div>
  );
};

export default ProfileCard;
