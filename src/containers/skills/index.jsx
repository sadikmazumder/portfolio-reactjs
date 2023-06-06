import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import "./style.scss";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <PageHeaderContent
          headerText="My Skiils"
          icon={<GiSkills size={40} />}
        />
        <div className="skills__content-wrapper">
          {skillsData.map((item, key) => (
            <div className="skills__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.4}
                start={{
                  transform: "translateX(-250px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div>
                  {item.data.map((dataItem, index) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity: 1", "opacity:0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={index}>
                        <p>{dataItem.sillName}</p>
                        <Line
                          percent={dataItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--selected-theme-main-color)"
                          strokeLinecap="square"
                          trailWidth="2"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
