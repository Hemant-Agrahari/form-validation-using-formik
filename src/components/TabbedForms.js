import React, { useState } from 'react';
import LoginForm from './LoginForm';
import UserForm from './UserForm';
import './TabbedForms.css';

const TabbedForms = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="tabbed-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`tab-button ${activeTab === 'registration' ? 'active' : ''}`}
          onClick={() => setActiveTab('registration')}
        >
          Registration
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'login' ? <LoginForm /> : <UserForm />}
      </div>
    </div>
  );
};

export default TabbedForms;

