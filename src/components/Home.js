import React from "react";
import me from "../images/me.jpg";

// import facebookicon from "../images/facebookicon.png";
// import instagram from "../images/instagram.png";
// import linkedin from "../images/linkedin.png";
// import github from "../images/github.png";
const Home = () => {
  return (
    <div>
      <div className="home">
        <span className="hello">Hello,</span>
        <span className="name">
          <h1>I'm Arnab...</h1>
        </span>
        <span className="prof">
          <h1>A Frontend Developer</h1>
        </span>

        <p>
          A passionate Web Developer with creative intstincts to create
          desirable websites
        </p>

        {/* <div className="social-buttons">
          <a href="#" className="social-button linkedin">
            <img src={linkedin} alt="Twitter" />
          </a>
          <a href="#" className="social-button github">
            <img src={github} alt="Twitter" />
          </a>
          <a href="#" className="social-button facebook">
            <img src={facebookicon} alt="Facebook" />
          </a>

          <a href="#" className="social-button instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        </div> */}
      </div>
      <img src={me} alt="" className="pic" />
    </div>
  );
};

export default Home;
