import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInscreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.CurrentScreenFadeIn.subscribe(fadeInHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work history", logoSrc: "work-history.svg" },
    { label: "programming skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 67 },
    { skill: "HTML", ratingPercentage: 77 },
    { skill: "CSS", ratingPercentage: 78},
    { skill: "Express JS", ratingPercentage: 56 },
    { skill: "MongoDB", ratingPercentage: 63 },
    { skill: "Node JS", ratingPercentage: 67 },
    { skill: "Java", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 81 },
  ];

  const projectDetails = [
    {
      title: "personal portfolio website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A website to show all my skills,project and my imagination as a whole to know more about me.",
      subHeading: "Technologies-used:React JS,BootStrap",
    },
    {
      title: "shopping website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A website in which the user can scroll through,add to cart,,see total and buy items and make payment .",
      subHeading: "Technologies-used:React JS,SCSS,Redux,Stripe",
    },
    {
      title: "Farrago website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A website for the motor sports club of our college.",
      subHeading: "Technologies-used:React JS,BootStrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"College of Engineering Trivandrum"}
        subHeading={"Bachelor of Mechanical Engineering"}
        fromDate={"2020"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Peringolam GHSS"}
        subHeading={"Bio-science"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"ST Mary's School"}
        subHeading={"highschooling"}
        fromDate={"2014"}
        toDate={"2017"}
      />
    </div>,

    <div className="resume-screen-container" key="work experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"CareStack"}
          subHeading={"develepor intern"}
          fromDate={"2023"}
          toDate={"present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            currently pursuing intership at a company. Part of a four membered
            intern group aiming at designing the selective responsiveness of the
            company's website
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -develops measures to improve the customer feedback of the website
            and improves the customer interaction.
          </span>
          <br />
          <span className="resume-description-text">
            -improvising customer suggestion based on the previous goods they
            have purchased and pushing the message system to constant alerts to
            customers on products.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage+"%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.fromDate}
          toDate={projectDetails.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="i have always been passionate about teaching since i love to share my knowledge which would in turn help improving mine"
      />
      <ResumeHeading
        heading="Music"
        description="music helps me to calm even in serious situation. It sooths my mind. I like to sing."
      />
      <ResumeHeading
        heading="Exercising"
        description="its a way of taking care of our body. It helps us to stay healthy.I have always been interested in physical improvement"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no internet"
        />
        <span className="bullets-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icon"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
