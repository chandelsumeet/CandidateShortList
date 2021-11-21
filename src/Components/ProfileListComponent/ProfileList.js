import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProfileCard from "../ProfileCardComponent/ProfileCard";
import "./ProfileList.css";
const ProfileList = ({ match }) => {
  const url = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`;

  const [profileList, setPorfileList] = useState([]);
  const [candidate, setCandidate] = useState("");
  const [selectedCanditate, setSelectedCanditate] = useState([
    { name: "sumeet" },
  ]);
  const [rejectedCanditate, setRejectedCanditate] = useState([
    { name: "sumeet" },
  ]);
  const fetchRequest = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { id, selection } = useParams();

  const setData = () => {
    let data = profileList.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });

    setCandidate((prevstate) => [data[0], ...prevstate]);
  };

  useEffect(() => {
    console.log("rerender");
    fetchRequest(url).then((data) => {
      setPorfileList(data);
      setData();
    });
  }, []);
  console.log(candidate);
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
