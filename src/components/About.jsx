import React from 'react'

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src="images/about111.png" alt="image" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>I'm Shailendra Parihar, A React Native Developer</h3>
        <p>I'm probably the most passionate mobile app developer you will ever get to work with.</p>
        <div className="btn-box btns">
          <a href="./about.html" className="btn">Read More</a>
        </div>
      </div>
    </section>
  )
}

export default About
