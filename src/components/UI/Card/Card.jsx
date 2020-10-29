import React, { useRef } from "react";
import "./Card.scss";
const Card = ({ src, title, text, url }) => {
  const moveContainer = useRef();
  const moveText = useRef();

  const mouseMove = (event) => {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    let yAxis = window.innerHeight / 22 / 25;
    moveContainer.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const mouseLeave = () => {
    moveContainer.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    moveContainer.current.style.transition = "all 0.5s ease";
  };

  const mouseEnter = () => {
    moveContainer.current.style.transition = "none";
    moveText.current.style.transform = "translateY(200px);";
  };

  return (
    <main
      ref={moveContainer}
      className="container"
      onMouseMove={(event) => mouseMove(event)}
      onMouseLeave={() => mouseLeave()}
      onMouseEnter={() => mouseEnter()}
    >
      <section className="card">
        <div className="sneaker">
          <div className="circle"></div>
          <img src={src} alt="imge" />
        </div>
        <div className="info">
          <h1 className="title">{title}</h1>
          <h3 ref={moveText}>{text}</h3>
          <div className="sizes">
            <button onClick={() => window.open(`${url}`)}>Visit</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Card;
