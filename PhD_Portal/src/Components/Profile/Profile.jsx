import React from "react";
import "./Profile.css";
import Navbar from "../Navbar/Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import prof from "../../assets/prof.png";

function Profile() {
  return (
    
    <div className="profile">  
    <main className="content">
    <Navbar Text = "Student Profile"/> 
    <div className="flex-container1">
      <div className="profile-card elem">
       
          <div className = "profile-details">
            <h2>Rohit Sattendra Deshpande</h2>
            <br></br>
            <br></br>

            <p>First Year </p>
            <p>Ph.D. in Computer Engineering</p>
            <p>K J Somaiya School of Engineering</p>
            <p>
              <FontAwesomeIcon icon={faBell} /> 1620220581 &emsp;
              <FontAwesomeIcon icon={faBell} /> rohit.sd@somaiya.edu &emsp; 
              <FontAwesomeIcon icon={faBell} /> 8291692070
            </p>
          </div>
          <div className = "profile-pic-details">
            <img className = "profile-pic" src = {prof}/>
          </div>
        
      </div>
      <div className="personal-details elem">
        <h2>Personal Details</h2>
      </div>
      <div className="fees elem">
        <h2>Fees</h2>
      </div>
      <div className="academic-summary elem">
        <h2>Academic Summary</h2>
      </div>
      </div>
      </main>
    </div>
  );
}

export default Profile;
