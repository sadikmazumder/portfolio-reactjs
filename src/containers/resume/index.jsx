import React from "react";
import { FaBlackTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import PageHeaderContent from "../../components/pageHeaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { data } from "./util";

import "./style.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
          >
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__verticle-timeline-component"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-main-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                // date="2023- present"
                iconStyle={{
                  background: "#181818",
                  color: "var(--selected-theme-main-color)",
                }}
                icon={<MdWork />}
                //dateClassName="vertical-timeline-element-custom-date"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-description-wrapper">
                  {item.description}
                </p>
                <h4>{item.tenure}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education </h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
          >
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__education__verticle-timeline-component"
                contentStyle={{
                  background: "none",
                  color: "var(--selected-theme-main-color)",
                  border: "1.5px solid var(--selected-theme-main-color)",
                }}
                // date="2023- present"
                iconStyle={{
                  background: "#181818",
                  color: "var(--selected-theme-main-color)",
                }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-description-wrapper">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
