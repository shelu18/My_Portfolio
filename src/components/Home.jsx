import React from 'react'

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hey, I'm <span>Shailendra Parihar</span></h1>
        <div className="text-animate">
          <h3>React Native & Mobile Developer</h3>
        </div>
        <p>Transforming Ideas into Interactive Web Realities</p>
        <div className="btn-box">
          <a href="https://wa.me/+919993732470?text=Hello Shailendra! >" className="btn">Let's Talk</a>
          <a href="cv/Updated-Resume.pdf" download className="btn">Download CV</a>
        </div>
      </div>
      <div className="home-sci">
        <a href="https://x.com/Shelu_parihar_"><i className='bx bxl-twitter'></i></a>
        <a href="https://www.linkedin.com/in/shailendra-parihar-3122b4220/"><i className='bx bxl-linkedin'></i></a>
        <a href="https://www.instagram.com/shailendra_parihar07/"><i className='bx bxl-instagram'></i></a>
        <a href="https://github.com/shelu18"><i className='bx bxl-github'></i></a>
      </div>
      <div className="home-imgHover"></div>
    </section>
  )
}

export default Home
