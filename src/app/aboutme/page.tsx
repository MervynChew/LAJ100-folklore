import React from 'react';
import './AboutMe.css';
import Header from '../../components/Header';

const AboutMe: React.FC = () => {
  return (
    <>
    <Header />
      <div className="about-container">
        <div className="about-card">
          <img
            src="/about/me.png" // Replace with actual photo file name
            alt="Mervyn"
            className="profile-image"
          />
          <div className="about-content">
            <h1>Mervyn Chew Yew Zhang</h1>
            <p><strong>Matric Number:</strong> 22304024</p>
            <p><strong>Assignment:</strong> LAJ 100</p>
            <p><strong>Major:</strong> Bachelor of Computer Science (Honours)(Intelligent Computing), Year 2</p>
            <p><strong>School:</strong> School of Computer Sciences, Universiti Sains Malaysia</p>
            <p><strong>Lecturer:</strong>Encik Kelana bin Ahmad</p>
            <p><strong>Email:</strong> <a href="mailto:your.email@example.com">mervynchew0095@student.usm.my</a></p>

            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/about/github.svg" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/mervyn-chew-9458b4298/" target="_blank" rel="noopener noreferrer">
                <img src="/about/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/mervvv_vyn/" target="_blank" rel="noopener noreferrer">
                <img src="/about/instagram.avif" alt="Instagram" />
              </a>
            </div>
          </div>
          <p style={{ marginTop: '75px' }}>
            Thank you for visiting this assignment
          </p>

        </div>
      </div>
    </>
  );
};

export default AboutMe;
