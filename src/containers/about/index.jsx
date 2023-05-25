import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { personalData } from "./util";
import "./style.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3 className="developerContenet">Front end developer</h3>
          <p>
            Seasoned and independent Front End Developer with 2+ years of
            experience in blending the art of design with skill od programming
            to deliver an immmersive and engaging user experience through
            efficient website development, proactive feature optimization, and
            relentless debugging. Very passionate about aesthetics and UI
            design. It is imperative that you provide a thorough and
            professional approach to your resume . As a Front End Developer
            you'll be judge by your ability to use UX and UI concepts and follow
            design guidelines. It's about expressing your attention to detail
            and how you can help implement design ideas for your future
            employer.
          </p>

          <h3 className="personalContent">Personal Information</h3>
          <ul>
            {personalData.map((item, key) => (
              <li key={key}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__content__servicesWrapper">service data</div>
      </div>
    </section>
  );
};

export default About;
