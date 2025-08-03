import React from 'react';

const UserSignupsChart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item, index) => (
        <div key={index} className="bar-container">
          <div className="bar-label">{item.month}</div>
          <div className="bar" style={{ width: `${item.count * 10}px` }}>
            {item.count}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserSignupsChart;