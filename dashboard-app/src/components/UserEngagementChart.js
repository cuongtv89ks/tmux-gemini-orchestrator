import React from 'react';

const UserEngagementChart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item, index) => (
        <div key={index} className="bar-container">
          <div className="bar-label">{item.week}</div>
          <div className="bar" style={{ width: `${item.hours * 20}px` }}>
            {item.hours} hrs
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserEngagementChart;