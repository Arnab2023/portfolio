import React from "react";
import UIDesign from "../images/ui-design.png";
import WebDesign from "../images/website-design.png";

const About = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Determined and motivated Web Developer seeking an entry-level
        opportunity with an esteemed organization where I can enhance my skills
        and contribute to innovative web development solutions. Passionate about
        creating visually appealing and user-friendly websites, I possess a
        strong understanding of front-end development. Committed to staying
        up-to-date with the latest industry trends and technologies.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
