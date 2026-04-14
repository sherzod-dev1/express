import React, { useState } from 'react';
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

const testimonialsData = [
  {
    id: 1,
    author: "JANE SMITH, FREELANCE CONSULTANT",
    text: "Jane Smith: FastGo service was exceptional! My cargo arrived two days earlier than expected, and the tracking system kept me updated every step of the way.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    author: "MICHAEL JOHNSON, CEO",
    text: "Michael Johnson: As a CEO, I value efficiency. FastGo has been our primary logistics partner for 3 years, and they never fail to deliver quality service.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    author: "SARAH LEE, ONLINE RETAILER",
    text: "Sarah Lee: Handling online orders requires speed. FastGo makes my business run smoothly by providing reliable shipping for all my customers globally.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 0,
    author: "JOHN DOE, BUSINESS OWNER",
    text: "John Doe: I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  }
];

const ContactUs = () => {
  const [activeId, setActiveId] = useState(0);

  const activeTestimonial = testimonialsData.find(t => t.id === activeId) || testimonialsData[3];

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
              <div className="featured-image-wrapper">
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.author} 
                  className="featured-testimonial-image"
                />
              </div>
            </div>
            <div className="featured-card-dark">
              <StarRating />
              <p>{activeTestimonial.text}</p>
              <span className="author">{activeTestimonial.author}</span>
            </div>
          </div>

          <div className="testimonials-right">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className={`testimonial-card ${activeId === item.id ? 'active' : ''}`}
                onClick={() => setActiveId(item.id)}
              >
                <StarRating />
                <p>{item.text}</p>
                <span className="author">{item.author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
