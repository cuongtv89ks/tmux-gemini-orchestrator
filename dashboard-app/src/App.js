import React from 'react';
import './App.css';
import UserSignupsChart from './components/UserSignupsChart';
import UserEngagementChart from './components/UserEngagementChart';
import UserData from './components/UserData';
import { userSignups, userEngagement, userData } from './mockData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Analytics Dashboard</h1>
      </header>
      <main>
        <div className="dashboard-container">
          <div className="chart-container">
            <h2>Chart 1: User Signups</h2>
            <UserSignupsChart data={userSignups} />
          </div>
          <div className="chart-container">
            <h2>Chart 2: User Engagement</h2>
            <UserEngagementChart data={userEngagement} />
          </div>
          <div className="data-container">
            <h2>User Data</h2>
            <UserData data={userData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;