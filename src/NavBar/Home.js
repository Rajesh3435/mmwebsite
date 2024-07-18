import React from 'react';
import './Home.css'; // Ensure you have this CSS file in place

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <div className="home-overlay"></div>
        <div className="home-text">
          <h1>Welcome to My Website</h1>
          <p>Your journey to excellence starts here</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
