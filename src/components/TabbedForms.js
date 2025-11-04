import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RestrationForm from './RestrationForm';
import '../styles/main.css';

const TabbedForms = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="page-wrapper">
      {/* Header with navigation buttons */}
      <header className="app-header">
        <div className="header-content">
          <h2 className="header-title">Welcome Back</h2>
          <div className="header-buttons">
            <button
              className={`header-btn ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`header-btn ${activeTab === 'registration' ? 'active' : ''}`}
              onClick={() => setActiveTab('registration')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Welcome Section - shown when no tab is selected */}
      {!activeTab && (
        <div className="welcome-section">
          <div className="welcome-content">
            <h1 className="welcome-heading">Welcome to Our Platform</h1>
            <p className="welcome-text">
              Please choose an option from the header to get started
            </p>
            <div className="welcome-icons">
              <div className="welcome-card" onClick={() => setActiveTab('login')}>
                <div className="card-icon">🔐</div>
                <h3>Login</h3>
                <p>Access your account</p>
              </div>
              <div className="welcome-card" onClick={() => setActiveTab('registration')}>
                <div className="card-icon">✨</div>
                <h3>Sign Up</h3>
                <p>Create new account</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabbed Forms - only shown when a tab is selected */}
      {activeTab && (
        <div className="tabbed-container">
          <div className="tabs-wrapper">
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Sign In
              </button>
              <button
                className={`tab-button ${activeTab === 'registration' ? 'active' : ''}`}
                onClick={() => setActiveTab('registration')}
              >
                Sign Up
              </button>
            </div>
            <button 
              className="tabs-close-icon"
              onClick={() => setActiveTab(null)}
              title="Close"
            >
              ✕
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'login' ? <LoginForm /> : <RestrationForm />}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabbedForms;

