import React from "react";

import anh1 from "./assets/tải xuống.jpg";

import "./style.css";
function Home() {
    return (
      <div className="test-p bordlength columns has-background-warning">
        <div className="column is-three-fifths">
          <h1 className="has-text-centered has-text-weight-bold is-size-1">
            About Me
          </h1>
          <p className="has-text-centered">
            I'm Chang
            <br />
            <br />
            I completed homework 3
            <br />
            <br />
            This site was built with React.
          </p>
        </div>
  
        <div className="column is-half has-text-centered ">
          <img src={anh1} alt="Dwayne"></img>
          <br></br>
          <a href="https://github.com/imchan01" target="blank">
            Github
          </a>
          <br />
          {/* <a
            href="https://docs.google.com/document/d/1lrJNs4jrj6RFp2I3n28F7-UAJbDtG4shW9GCGHkP-M8/edit?usp=sharing"
            target="blank"
          >
            Resume
          </a> */}
          <br />
          <a
            href="https://www.linkedin.com/in/luogthuytrang/"
            target="blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  
  export default Home;