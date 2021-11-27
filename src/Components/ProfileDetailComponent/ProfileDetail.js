import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProfileDetail.css";
import { useNavigate } from "react-router-dom";

const ProfileDetail = () => {
  const url = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`;

  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const fetchRequest = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const params = useParams();
  useEffect(() => {
    fetchRequest(url).then((data) => {
      const profileData = data.filter((item) => {
        return item.id === params.id;
      });
      setProfile(profileData[0]);
    });
  }, []);

  let totalCandidates = JSON.parse(
    localStorage.getItem("totalCandidates") || "[]"
  );

  const filterData = (profile) => {
    if (totalCandidates.length !== 0) {
      totalCandidates = totalCandidates.filter((item) => item.id != profile.id);
    }

    localStorage.setItem("totalCandidates", JSON.stringify(totalCandidates));
    console.log("after being slected", totalCandidates);
  };

  const selectedCandidate = () => {
    console.log("pushed");
    let selectedData = JSON.parse(localStorage.getItem("selectedData") || "[]");
    let valuePresent = false;
    selectedData.map((item) => {
      if (item.id === profile.id) {
        valuePresent = true;
      }
    });

    if (valuePresent) {
      navigate("/");
    } else {
      selectedData.push(profile);

      localStorage.setItem("selectedData", JSON.stringify(selectedData));
      filterData(profile);

      navigate("/");
    }
  };

  const rejectedCandidate = () => {
    console.log("pushed");
    let valuePresent = false;
    let rejectedData = JSON.parse(localStorage.getItem("rejectedData") || "[]");

    rejectedData.map((item) => {
      if (item.id === profile.id) {
        valuePresent = true;
      }
    });

    if (valuePresent) {
      navigate("/");
    } else {
      rejectedData.push(profile);
      localStorage.setItem("rejectedData", JSON.stringify(rejectedData));
      filterData(profile);
      navigate("/");
    }
  };

  const { Image, name, id } = profile;
  return (
    <div className="profile-card">
      <img src={Image} alt="" />
      <h3>{name}</h3>
      <div className="selection-button-container">
        <button onClick={selectedCandidate}>Selected</button>
        <button onClick={rejectedCandidate}>Rejected</button>
      </div>
    </div>
  );
};

export default ProfileDetail;
