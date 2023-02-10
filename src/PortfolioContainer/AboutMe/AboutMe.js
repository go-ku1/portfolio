import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInscreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.CurrentScreenFadeIn.subscribe(fadeInHandler);

  const SCREEN_CONSTANTS = {
    description:
      "A guy who is fascinated by the the technologies and is always curious about learning new things. Discipline and sense of responsibilty which makes me a team player. I am empathetic towards my surroundings and my fellow beings. Prioritises mental and physical health.",
    highlights: {
      bullets: [
        "develops web apps using react",
        "cocept in MERN basics",
        "cad designing",
        "structural analysis using  ANSYS",
        "java programming",
        "front-end interactive websites"
      ],
      heading: "My highlights :",
    },
  };

  const renderHighlight = () => {
    return (SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ))
    )
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why to choose me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
              <a href="GokulResume.pdf" download="GokulGokulResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
