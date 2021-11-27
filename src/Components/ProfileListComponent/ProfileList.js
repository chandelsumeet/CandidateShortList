import { findByPlaceholderText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProfileCard from "../ProfileCardComponent/ProfileCard";
import "./ProfileList.css";
const ProfileList = ({ match }) => {
  const url = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`;

  const [profileList, setPorfileList] = useState([]);
  const fetchRequest = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const setPorfileListData = async () => {
    let totalCandidates = JSON.parse(
      localStorage.getItem("totalCandidates") || "[]"
    );
    if (totalCandidates.length === 0) {
      const response = await fetchRequest(url);
      setPorfileList(response);
      response.map((profile) => {
        totalCandidates.push(profile);
      });
      localStorage.setItem("totalCandidates", JSON.stringify(totalCandidates));
      console.log("totalcandidates Profile List", totalCandidates);
    } else {
      setPorfileList(totalCandidates);
      console.log("totalcandidates Profile List", totalCandidates);
    }
  };

  useEffect(() => {
    console.log("rerender");
    setPorfileListData();
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
        {profileList.map((profile) => {
          return <ProfileCard key={profile.id} profileInfo={profile} />;
        })}
      </div>
    </>
  );
};

export default ProfileList;
