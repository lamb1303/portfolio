import React, { useRef, useEffect } from "react";
import { ReactComponent as Down } from "./assets/down.svg";
import about from "./assets/about.svg";
import redux from "./assets/redux.svg";
import goals from "./assets/goals.svg";
import productive from "./assets/productive.svg";
import team from "./assets/team.svg";
import angular from "./assets/Angular.svg";
import html5 from "./assets/HTML5.svg";
import sass from "./assets/Sass.svg";
import js from "./assets/js.svg";
import three from "./assets/threejs.png";
import java from "./assets/java.svg";
import css from "./assets/css3.svg";
import git from "./assets/git.svg";
import mysql from "./assets/mysql.svg";
import firebase from "./assets/firebase.png";
import heroku from "./assets/heroku.svg";
import node from "./assets/node.png";
import "./About.scss";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const skills = useRef(null);
  const excecuteScroll = () => scrollToRef(skills);
  return (
    <main>
      <section className="about">
        <div className="about-content">
          <div className="about-presentation">
            <h1>About</h1>
            <p className="p">
              Learn from yesterday, live for today, hope for tomorrow. The
              important thing is not to stop questioning. — Albert Einstein
            </p>
          </div>
          <img src={about} alt="about"></img>
          {/* <button>Resume</button> */}
          <Down onClick={excecuteScroll} className="about-more" />
        </div>
      </section>
      <section ref={skills} className="tech-skills">
        <main>
          <div className="skills">
            <div className="skills-content">
              <h1>Skills</h1>
              <img src={goals} alt="goal"></img>
              <img src={team} alt="team"></img>
              <img src={productive} alt="productive"></img>
            </div>
          </div>
        </main>
        <section id="skills" className="programming-skills">
          <div className="front">
            <h1>Frontend</h1>
            <img
              style={{ marginTop: "13px", width: "90px" }}
              src={sass}
              alt="sass"
            ></img>
            <img src={angular} alt="angular"></img>
            <img src={html5} alt="html5"></img>
            <img
              style={{ backgroundColor: "white", borderRadius: "60px" }}
              src={three}
              alt="three.js"
            ></img>
            <img style={{ width: "120px" }} src="logo.svg" alt="react"></img>
            <img src={redux} alt="redux"></img>
            <img src={css} alt="css"></img>
          </div>
          <div className="programming">
            <h1>Programming</h1>
            <img src={js} alt="js"></img>
            <img src={java} alt="java"></img>
            <img src={firebase} alt="firebase"></img>
            <img src={node} alt="node"></img>
            <img src={mysql} alt="mysql"></img>
          </div>
          <div className="host">
            <h1>Hosting Platforms</h1>
            <img
              style={{ backgroundColor: "white", borderRadius: "66px" }}
              src={git}
              alt="git"
            ></img>
            <img src={firebase} alt="firebase"></img>
            <img src={heroku} alt="heroku"></img>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
