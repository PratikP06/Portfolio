

const About = () => {
  return (
    <section id="about" className="py-section-gap px-margin">
      <div className="about-wrapper">
        <div className="about-note paper-texture card-shadow fade-up">
          <div className="paper-pin">
            <div className="paper-pin-highlight"></div>
          </div>
          <div className="about-text-wrapper">
            <h2 className="font-headline-lg about-title">About Me</h2>
            <div className="about-desc-container">
              <p className="font-body-lg text-on-surface-variant">
                I'm Pratik, a Computer Engineering student with a growing passion for building clean, modern, and responsive web applications. I enjoy turning ideas into interactive UI, writing readable code, and exploring how good design and smooth functionality come together.
                <br /> <br />I build projects across the full stack using React, Next.js, Node.js, and MongoDB — from designing REST APIs to shipping responsive frontends. My focus is on writing code that's not just functional, but maintainable and thoughtfully structured.</p>

              <div className="about-actions">
                <a href="https://www.linkedin.com/in/pratikpawar21/" target="_blank" rel="noopener noreferrer" className="btn-primary font-label-md text-on-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm10.993 8.212V9.937c0-1.86-.992-2.727-2.318-2.727-1.07 0-1.54.588-1.808 1.004v-.865H8.33c.03 1.002 0 7.225 0 7.225h2.402V9.142c0-.423.03-.846.155-1.151.337-.846 1.1-1.72 2.377-1.72 1.677 0 2.347 1.277 2.347 3.152v4.001h2.402z"></path>
                  </svg>
                  View Linkedin
                </a>
                <a href="https://github.com/PratikP06" target="_blank" rel="noopener noreferrer" className="btn-outline font-label-md" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  View Github
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
