import "./profile.css";
import Typical from "react-typical";
import React from "react";
import ScrollService from "../../../utilities/ScrollService";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://www.facebook.com/zayn/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/zayn/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@Zayn">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/zaynmalik">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              hello,I'm <span className="highlighted-text">GOKUL</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "react developer",
                    1000,
                    "mechanical engineer",
                    1000,
                    "java developer",
                    1000,
                    "cad designer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building thing in the way i can to the user.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" 
                    onClick={()=>ScrollService.ScrollHandler.ScrollToHireMe}>
              {""}
              Hire Me{" "}
            </button>
            <a href="GokulResume.pdf" download="GokulGokulResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
