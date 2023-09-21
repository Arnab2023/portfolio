import React from "react";
import portfolio1 from "../images/portfolio1.png";
import portfolio2 from "../images/portfolio2.png";
import portfolio3 from "../images/portfolio3.png";
import portfolio4 from "../images/portfolio4.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <p>
        These are the list of projects that I've built. You can check them out
        below:
      </p>
      <div className="cards">
        <div className="card">
          <img src={portfolio1} alt="" className="cardImg" />
          <h2>Web Blog</h2>
          <p>Project Description</p>
          <button className="btn">Click Here</button>
          <br />
        </div>

        <div className="card">
          <img src={portfolio2} alt="" className="cardImg" />
          <h2>E-Commerce</h2>
          <p>Project Description</p>
          <button className="btn">Click Here</button>
          <br />
        </div>
        <div className="card">
          <img src={portfolio3} alt="" className="cardImg" />
          <h2>Recipe App</h2>
          <p>Project Description</p>
          <button className="btn">Click Here</button>
          <br />
        </div>
        <div className="card">
          <img src={portfolio4} alt="" className="cardImg" />
          <h2>Weather App</h2>
          <p>Project Description</p>
          <button className="btn">Click Here</button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
