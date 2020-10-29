import React from 'react';
import Typewriter from "typewriter-effect";
import './Home.scss'
const Home = () => {
    return (
        <main data-router-wraper>
            <section data-router-wraper="home" className="home">
                <div className="home-content">
                    <div className="home-presentation">
                        <h1>Hi, I'm Luis Medina</h1>
                        <Typewriter className="Typewriter__wrapper"
                                  options={{
                                  strings: ["Creative.","Web Developer.", "Passionate.","Team Worker.", "Learner."],
                                  autoStart: true,
                                  loop: true,
                                 delay: 30
                              }}
                             />
                    </div>
                </div>
            </section>
       </main>
       
    )
}

export default Home;