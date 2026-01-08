import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/about-page.css'

function AboutPage() {
  return (
    <>
      {/* Simple Header for About Page */}
      <header className="about-header">
        <Link to="/" className="logo">Shailendra <span>Parihar</span></Link>
        <Link to="/" className="back-btn">
          <i className='bx bx-arrow-back'></i> Back to Home
        </Link>
      </header>

      <section className="about-detailed">
        <h2 className="heading">About <span>Me</span></h2>
        
        <div className="about-container">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-card">
              <img src="images/about3.jpg" alt="Shailendra Parihar" className="profile-image" />
              <h3>Shailendra Parihar</h3>
              <p className="role">React Native & MERN Developer</p>
              <p className="location"><i className='bx bxs-map'></i> India</p>
              
              <div className="social-links">
                <a href="https://github.com/shelu18" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-github'></i>
                </a>
                <a href="https://www.linkedin.com/in/shailendra-parihar-3122b4220/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://x.com/Shelu_parihar_" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-twitter'></i>
                </a>
                <a href="https://www.instagram.com/shailendra_parihar07/" target="_blank" rel="noopener noreferrer">
                  <i className='bx bxl-instagram'></i>
                </a>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section">
            <div className="info-card">
              <h3><i className='bx bxs-user-detail'></i> Professional Summary</h3>
              <p>
                I'm a React Native & MERN Stack Developer with hands-on experience building and deploying cross-platform mobile applications. I've shipped production features like real-time chat, map integrations, push notifications, auto-dial workflows, secure authentication, and in-app payments. I'm comfortable owning features end-to-end – from integrating REST APIs to releasing apps on the Play Store and App Store.
              </p>
              <p>
                At Ultraxpert Technologies, I worked on production React Native apps including <strong>Drinking Buddy</strong> (a social networking app for club discovery) and a <strong>CRM Autodialer</strong> for sales teams. My work involved implementing Socket.IO for real-time chat, Google Maps SDK integration, OAuth 2.0 authentication, FCM push notifications, background call tracking, and managing EAS builds for both Android and iOS platforms.
              </p>
              <p>
                Previously, as an SDE Intern at Site Guru & Websotech, I built responsive web dashboards using Vue.js and Vuetify, integrated backend APIs for 100+ daily users, and resolved production issues affecting performance and reliability.
              </p>
            </div>

            <div className="info-card">
              <h3><i className='bx bxs-code-alt'></i> Tech Stack</h3>
              <div className="tech-stack">
                <div className="tech-category">
                  <h4><i className='bx bxl-react'></i> Mobile Development</h4>
                  <ul>
                    <li>React Native</li>
                    <li>TypeScript</li>
                    <li>Expo</li>
                    <li>React Navigation</li>
                    <li>Zustand</li>
                    <li>Axios</li>
                    <li>Firebase Cloud Messaging</li>
                    <li>AsyncStorage</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4><i className='bx bxs-server'></i> Backend & Database</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>REST APIs</li>
                    <li>JWT Authentication</li>
                    <li>Socket.IO</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4><i className='bx bxs-wrench'></i> Tools & DevOps</h4>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Postman</li>
                    <li>Docker</li>
                    <li>AWS (Basic)</li>
                    <li>EAS Build</li>
                    <li>App Store Deployment</li>
                    <li>Play Store Deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3><i className='bx bxs-star'></i> Key Highlights</h3>
              <div className="highlights">
                <div className="highlight-box">
                  <i className='bx bxs-mobile'></i>
                  <h4>Cross-Platform Apps</h4>
                  <p>Built & deployed apps for Android & iOS</p>
                </div>
                <div className="highlight-box">
                  <i className='bx bxs-network-chart'></i>
                  <h4>Real-Time Features</h4>
                  <p>Implemented chat & live updates</p>
                </div>
                <div className="highlight-box">
                  <i className='bx bxs-lock-alt'></i>
                  <h4>Secure Auth</h4>
                  <p>OAuth 2.0 & JWT implementation</p>
                </div>
                <div className="highlight-box">
                  <i className='bx bxs-rocket'></i>
                  <h4>Production Ready</h4>
                  <p>EAS builds & store deployments</p>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3><i className='bx bxs-bullseye'></i> What I'm Looking For</h3>
              <p>
                I'm seeking <strong>React Native Developer</strong> and <strong>MERN / Full-Stack Developer</strong> roles (remote preferred) where I can ship meaningful mobile and web features, collaborate with experienced engineers, and continue advancing my skills in React, React Native, and Node.js.
              </p>
              <p>
                I bring a fresh perspective, attention to detail, strong problem-solving abilities, and an unwavering commitment to continuous learning. I thrive in environments that foster innovation and growth, and I'm eager to contribute to forward-thinking teams building impactful solutions.
              </p>
              <p style={{ marginTop: '2rem', fontSize: '1.8rem', color: 'var(--main-color)' }}>
                <i className='bx bxs-envelope'></i> Open to remote opportunities • Available for code reviews and live demos
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
