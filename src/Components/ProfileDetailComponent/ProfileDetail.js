import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProfileDetail.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedCandidate } from "../../redux/actions/users";
import { rejectedCandidate } from "../../redux/actions/users";
const ProfileDetail = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [profile, setProfile] = useState([]);

  const params = useParams();
  useEffect(() => {
    const candidate = users.filter((profile) => profile.id === params.id);
    setProfile(candidate[0]);
  }, []);

  const { Image, name } = profile;
  return (
    <div className="profile-card">
      <img src={Image} alt="" />
      <h3>{name}</h3>
      <div className="selection-button-container">
        <button onClick={() => dispatch(selectedCandidate(profile))}>
          Selected
        </button>
        <button onClick={() => dispatch(rejectedCandidate(profile))}>
          Rejected
        </button>
      </div>
    </div>
  );
};

export default ProfileDetail;
