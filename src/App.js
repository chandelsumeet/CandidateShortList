import logo from "./logo.svg";
import "./App.css";
import ProfileList from "./Components/ProfileListComponent/ProfileList";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProfileDetail from "./Components/ProfileDetailComponent/ProfileDetail";
import { useEffect } from "react";
import Navbar from "./Components/NavbarComponent/Navbar";
import SelectedCandidate from "./Components/SelectedCandidateComponent/SelectedCandidate";
import RejectedCandidate from "./Components/RejectedCandidateComponent/RejectedCandidate";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProfileList />} />
          <Route exact path="/ProfileDetail/:id" element={<ProfileDetail />} />
          <Route exact path="/:id/:selection" element={<ProfileList />} />
          <Route
            exact
            path="/selectedcandidate"
            element={<SelectedCandidate />}
          />
          <Route
            exact
            path="/rejectedcandidate"
            element={<RejectedCandidate />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
