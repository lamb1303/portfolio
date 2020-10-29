import React, { useEffect } from "react";
import logo from "./assets/logo.png";
import encanchate from "./assets/whistle.svg";
import russapp from "./assets/Coming.png";
import zoom from "./assets/video-call.svg";
import netflix from "./assets/record.svg";
import Card from "../UI/Card/Card";
import "./Work.scss";
const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-work-area">
      <Card
        url="https://mexicoencasa.mx/"
        src={logo}
        title="México en Casa"
        text="Initiative that tries to reduce the Covid-19 propagation. This web app	 
        allows to the smalls restaurants in México, count with a delivery service in a web platform..."
      />

      <Card
        url="https://encanchate.org/"
        src={encanchate}
        text="Organization Encancháte tries to develop the integrity of the young people, creating a belonging sense..."
        title="Encancháte"
      />

      <Card
        url="https://test-a2ce4.web.app/"
        src={russapp}
        text="Web page that shows the power of the Three.js library in combination with React..."
        title="RUSSAPP"
      />

      <Card
        url="https://fast-crag-31547.herokuapp.com/"
        src={zoom}
        text="This is a Zoom desktop clone app. You can start a simple meeting with some functionality..."
        title="Zoom Clone"
      />

      <Card
        url="https://netflix-clone-8954b.web.app/"
        src={netflix}
        text="This is a Netflix clone app that uses a public API to watch a movie trailer video..."
        title="Netflix Clone"
      />
    </div>
  );
};

export default Work;
