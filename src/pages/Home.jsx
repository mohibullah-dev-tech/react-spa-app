import { motion } from "framer-motion";
import { useAppContext } from "../context/AppContext";

function Home() {
  const { theme } = useAppContext();

  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero">
        <div className="hero-content">
          <span className="hero-badge">⚡ Modern React Application</span>

          <h1>
            Build Fast.
            <span> Navigate Smoothly.</span>
          </h1>

          <p>
            A modern Single Page Application built with React, React Router,
            Context API, and smooth page transitions.
          </p>

          <div className="hero-buttons">
            <a href="#features" className="primary-btn">
              Explore Features
            </a>

            <a href="#about" className="secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="visual-content">
              <div className="code-line long"></div>
              <div className="code-line medium"></div>
              <div className="code-line short"></div>
              <div className="code-line long"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="features" id="features">
        <div className="section-heading">
          <span>WHY THIS SPA?</span>
          <h2>Built for a Smooth Experience</h2>
          <p>
            Everything you need to demonstrate modern client-side navigation and
            state management.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Navigation</h3>
            <p>Navigate between pages instantly without full page reloads.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Global State</h3>
            <p>
              React Context API maintains shared application state across
              different pages.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Smooth Transitions</h3>
            <p>
              Framer Motion provides elegant animations for a better user
              experience.
            </p>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default Home;
