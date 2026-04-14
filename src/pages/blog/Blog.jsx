import React, { useState } from 'react';
import './blog.css';

const Blog = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="action-section">
      <div className="action-content">
        <h2 className="action-title">SEE IT IN ACTION</h2>
        <p className="action-subtitle">Watch Our Video to Get a Clear Understanding of How It Works</p>
        <div className="play-button-wrapper">
          <button className="play-button" onClick={toggleVideo}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="#1a4fff" />
            </svg>
          </button>
        </div>
      </div>

      {showVideo && (
        <div className="video-modal-overlay" onClick={toggleVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleVideo}>&times;</button>
            <div className="iframe-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SqcY0GlETPk?autoplay=1"
                title="React JS darslari"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
