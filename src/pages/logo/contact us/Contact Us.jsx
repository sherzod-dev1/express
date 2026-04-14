import React from 'react';
import './contact Us.css';

const StarRating = () => (
  <div className="star-rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#254bdb">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const ContactUs = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-subtitle">TESTIMONIALS</span>
          <h2 className="testimonials-title">OUR CLIENTS SPEAK FOR US</h2>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-left">
            <div className="featured-testimonial-box">
              <div className="quote-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="video-placeholder-dark"></div>
            </div>
            <div className="featured-card-dark">
              <StarRating />
              <p>
                I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services.
              </p>
              <span className="author">JOHN DOE, BUSINESS OWNER</span>
            </div>
          </div>

          <div className="testimonials-right">
            <div className="testimonial-card">
              <StarRating />
              <p>
                I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
              </p>
              <span className="author">JANE SMITH, FREELANCE CONSULTANT</span>
            </div>

            <div className="testimonial-card">
              <StarRating />
              <p>
                I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
              </p>
              <span className="author">MICHAEL JOHNSON, CEO</span>
            </div>

            <div className="testimonial-card">
              <StarRating />
              <p>
                I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
              </p>
              <span className="author">SARAH LEE, ONLINE RETAILER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
