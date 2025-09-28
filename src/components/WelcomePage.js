import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Solar Monitor</h1>
        <p className="tagline">Intelligent Solar Energy Management for Your Home</p>
      </header>

      <main className="welcome-content">
        <section className="hero">
          <div className="hero-text">
            <h2>Smart Load Balancing</h2>
            <p>
              Our AI-powered system automatically schedules your home appliances 
              to maximize solar energy usage and minimize grid consumption, 
              reducing your electricity bills by up to 40%.
            </p>
          </div>
          <div className="hero-image">
            <img src="/images/solar-house.jpg" alt="Solar Home" />
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>🌞 Real-time Monitoring</h3>
            <p>Track solar generation, grid usage, and appliance consumption in real-time</p>
          </div>
          <div className="feature-card">
            <h3>🤖 AI Predictions</h3>
            <p>Machine learning algorithms predict optimal appliance scheduling</p>
          </div>
          <div className="feature-card">
            <h3>💰 Cost Savings</h3>
            <p>Reduce electricity bills through intelligent load management</p>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Start Saving?</h2>
          <div className="auth-buttons">
            <Link to="/signin" className="btn btn-primary">Sign In</Link>
            <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage;
