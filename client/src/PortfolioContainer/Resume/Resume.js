import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { Button } from "react-bootstrap";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
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
          {props.source ? (
            <div>
              <Button
                href={props.source}
                className="link"
                target="_blank"
                variant="secondary"
              >
                Link
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    // { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Achievements & Certifications", logoSrc: "work-history.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 75 },
    { skill: "Java", ratingPercentage: 75 },
    { skill: "Python", ratingPercentage: 65 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Dart", ratingPercentage: 65 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "8/2021", toDate: "Present" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
      source: "https://aritrasen12345-portfolio.herokuapp.com/",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "10/2021", toDate: "11/2021" },
      description:
        "A React E-commerce Progressive Web App which has Authentication, Database, CRUD, Payment features.",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Bootstrap",
      source: "https://ekart-front.herokuapp.com/",
    },
    {
      title: "J.A.R.V.I.S ",
      duration: { fromDate: "6/2021", toDate: "7/2021" },
      description:
        "This is a Virtual Desktop assistant which i made using Python libraries such as pyttsx3, speech recognition",
      subHeading:
        "Like SIRI it can also perform all tasks the user instructs like checking weather, play video and musics etc",
      source: "https://github.com/aritrasen12345/J.A.R.V.I.S",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Government College of Engineering and Leather Technology"}
        subHeading={
          "BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING"
        }
        fromDate={"2019"}
        toDate={"Present"}
      />

      <ResumeHeading
        heading={"Bengal Engineering College Model School"}
        subHeading={"SECONDARY AND HIGH SECONDARY"}
        fromDate={"2011"}
        toDate={"2019"}
      />
    </div>,

    /* WORK EXPERIENCE */
    // <div className="resume-screen-container" key="work-experience">
    //     <div className="experience-container">
    //         <ResumeHeading
    //             heading={"Ehizeex Technoloy"}
    //             subHeading={"FULL STACK DEVELOPER INTERN"}
    //             fromDate={"2021"}
    //             toDate={"Present"}
    //         />
    //         <div className="experience-description">
    //             <span className="resume-description-text">
    //                 Currently working as MERN stack web and mobile developer and also an
    //                 online instructor on udemy.
    //             </span>
    //         </div>
    //         <div className="experience-description">
    //             <span className="resume-description-text">
    //                 - Developed an ecommerce website for client with the dashboard for
    //                 managing the products, managing reviews, users, payment etc. .
    //             </span>
    //             <br />
    //             <span className="resume-description-text">
    //                 - Integrated the web app with backend services to create new user
    //                 onboarding application with dynamic form content.{" "}
    //             </span>
    //             <br />
    //             <span className="resume-description-text">
    //                 - I stretch my mental capacity to develope UI as per the given
    //                 designs.
    //             </span>
    //             <br />
    //         </div>
    //     </div>
    // </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          source={projectsDetails.source}
        />
      ))}
    </div>,

    /* ACHIEVEMENTS & CERTIFICATIONS*/
    <div className="resume-screen-container" key="achievements">
      <ResumeHeading heading="5 Star Coder at HackerRank" />
      <ResumeHeading heading="3 Star Coder at Codechef" />
      <ResumeHeading heading="Google KickStart Rank 3423(2021)" />
      <ResumeHeading heading="Hactoberfest 2021" />
      <ResumeHeading heading="Machine Learning Coursera(2021)" />
      <ResumeHeading heading="CSFPC CertiProf(2021)" />
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Cyber Security" />
      <ResumeHeading heading="Sports" />
      <ResumeHeading heading="Gaming" />
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
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
