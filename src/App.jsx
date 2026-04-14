import React from 'react'
import Logo from './pages/logo/Logo'
import Blog from './pages/blog/Blog'
import ContactUs from './pages/contact us/Contact Us'
import Footer from './pages/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Logo />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-left">
            <div className="video-placeholder"></div>
          </div>
          <div className="hero-right">
            <span className="subtitle">HOW IT WORKS</span>
            <h1>SIMPLIFY YOUR SHIPPING EXPERIENCE WITH OUR EASY STEP PROCESS</h1>
            <p>
              At FastGo, we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs. With years of
              experience and a team of experts, we are dedicated to empowering your
              business with seamless shipping experiences.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="steps-section">
          <div className="step-item">
            <span className="step-label">Step 1</span>
            <div className="step-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8L12 3L3 8V16L12 21L21 16V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 8L12 13L21 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 13V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>REQUEST A QUOTE</h3>
            <p>
              At FastGo, we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>

          <div className="step-item">
            <span className="step-label">Step 2</span>
            <div className="step-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8L12 3L3 8V16L12 21L21 16V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 8L12 13L21 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 13V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>PROVIDE DETAILS</h3>
            <p>
              At FastGo, we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>

          <div className="step-item">
            <span className="step-label">Step 3</span>
            <div className="step-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8L12 3L3 8V16L12 21L21 16V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 8L12 13L21 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 13V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>SCHEDULE PICK-UP</h3>
            <p>
              At FastGo, we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>
        </section>
      </main>

      <Blog />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
