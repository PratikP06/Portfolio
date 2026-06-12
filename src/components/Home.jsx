import React from 'react';
import resume from '../assets/Pratik_Pawar_CV.pdf';

const Home = () => {
  return (
    <section id="home" className="hero-section px-margin">
      <div className="organic-blob"></div>
      <div className="container hero-grid">
        <div className="animate-fade-in-up">
          <h1 className="hero-primary-title">Hi, I'm Pratik.</h1>
          <h2 className="hero-secondary-title">

            Full Stack Developer
          </h2>
          <p className="font-body-lg text-on-surface-variant hero-desc">
            I build modern web applications and developer tools, turning ideas into products through clean code and thoughtful design.
          </p>
          <div className="hero-actions">
            <a href= {resume} className="btn-primary btn-primary-large font-label-md text-on-primary">Download Resume</a>
            <a href="#contact" className="btn-outline font-label-md">Contact Me</a>
          </div>
        </div>

        <div className="hero-code-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="code-card paper-texture animate-float">
            <div className="washi-tape"></div>
            <div className="window-controls">
              <div className="window-dot"></div>
              <div className="window-dot"></div>
              <div className="window-dot"></div>
            </div>
            <div className="code-content">
              <span className="text-primary" style={{ fontWeight: "bold" }}>
                const
              </span>{" "}
              <span style={{ color: "var(--secondary)" }}>developer</span> = {"{"}
              <br />
              &nbsp;&nbsp;name:{" "}
              <span className="text-primary" style={{ fontStyle: "italic" }}>
                "Pratik"
              </span>
              ,
              <br />
              &nbsp;&nbsp;curiosity:{" "}
              <span className="text-primary" style={{ fontWeight: "bold" }}>
                Infinity
              </span>
              ,
              <br />



              &nbsp;&nbsp;bugs:{" "}
              <span className="text-primary" style={{ fontStyle: "italic" }}>
                "inevitable"
              </span>
              ,
              <br />
              &nbsp;&nbsp;growth:{" "}
              <span className="text-primary" style={{ fontStyle: "italic" }}>
                "guaranteed"
              </span>
              <br />
              {"}"};
              <br />
              <br />
              <span className="text-primary" style={{ fontWeight: "bold" }}>
                export default
              </span>{" "}
              developer;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
