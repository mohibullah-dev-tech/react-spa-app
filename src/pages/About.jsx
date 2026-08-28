import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-hero">
        <span className="page-badge">ABOUT THE PROJECT</span>

        <h1>
          A Simple App With
          <span> Modern React Concepts.</span>
        </h1>

        <p>
          This Single Page Application demonstrates how modern React
          applications can provide fast navigation, shared state management, and
          smooth user experiences without full page reloads.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-content">
          <h2>What is this project?</h2>

          <p>
            This project is a modern Single Page Application built using React.
            Instead of loading a completely new page when users navigate, React
            dynamically updates the content inside the application.
          </p>

          <p>
            React Router handles navigation between Home, About, and Contact
            pages, while React Context API manages shared state across the
            application.
          </p>
        </div>

        <div className="tech-card">
          <h3>Technologies Used</h3>

          <div className="tech-list">
            <div className="tech-item">
              <span>⚛️</span>
              <div>
                <h4>React</h4>
                <p>Component-based user interface</p>
              </div>
            </div>

            <div className="tech-item">
              <span>🧭</span>
              <div>
                <h4>React Router</h4>
                <p>Client-side navigation</p>
              </div>
            </div>

            <div className="tech-item">
              <span>🔄</span>
              <div>
                <h4>Context API</h4>
                <p>Global state management</p>
              </div>
            </div>

            <div className="tech-item">
              <span>✨</span>
              <div>
                <h4>Framer Motion</h4>
                <p>Smooth page animations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="project-objectives">
        <div className="section-heading">
          <span>PROJECT OBJECTIVES</span>
          <h2>What This SPA Demonstrates</h2>
        </div>

        <div className="objective-grid">
          <div className="objective-card">
            <span className="objective-number">01</span>
            <h3>Fast Navigation</h3>
            <p>
              Navigate between pages instantly without refreshing the browser.
            </p>
          </div>

          <div className="objective-card">
            <span className="objective-number">02</span>
            <h3>Shared State</h3>
            <p>
              Maintain application state across multiple pages using Context
              API.
            </p>
          </div>

          <div className="objective-card">
            <span className="objective-number">03</span>
            <h3>Smooth Experience</h3>
            <p>
              Use animations and transitions to create a modern user experience.
            </p>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default About;
