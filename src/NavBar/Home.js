import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const card = document.querySelector('.card');

    const handleMouseMove = (e) => {
      const { offsetWidth: width, offsetHeight: height } = card;
      const { offsetX: x, offsetY: y } = e;
      const moveX = (x / width - 0.5) * 40; // Increased rotation multiplier
      const moveY = (y / height - 0.5) * 40; // Increased rotation multiplier

      card.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
      card.style.boxShadow = `${moveX * 2}px ${moveY * 2}px 30px rgba(0, 0, 0, 0.3)`; // Increased shadow effect
    };

    const resetTransform = () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      card.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', resetTransform);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', resetTransform);
    };
  }, []);

  return (
    <div id="home" style={{ height: '100vh', backgroundColor: 'black' }}>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">DIGITAL PARTNER</span>
            <p className="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <span className="see-more">See More</span>
          </div>
          <div className="date-box">
            <span className="month">JUNE</span>
            <span className="date">29</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
