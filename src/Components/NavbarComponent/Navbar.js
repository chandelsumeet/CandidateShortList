import React from "react";
import ProfileList from "../ProfileListComponent/ProfileList";
import { Link } from "react-router-dom";
import SelectedCandidate from "../SelectedCandidateComponent/SelectedCandidate";
import RejectedCandidate from "../SelectedCandidateComponent/SelectedCandidate";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="flex-container">
      <Link to="/">Home</Link>
      <Link to="/selectedcandidate">Selected Candidate</Link>
      <Link to="/rejectedcandidate">Rejected Candidate</Link>
    </div>
  );
};
export default Navbar;
