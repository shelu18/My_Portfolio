import React from 'react'

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">Work <span>Experience</span></h2>
      <div className="experience-row">
        <div className="experience-column">
          <h3 className="title">Professional Experience</h3>
          <div className="experience-box">
            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>June 2024 - Present</div>
                <h3>Senior React Native Developer - Tech Innovations Inc.</h3>
                <p>Leading the mobile development team in creating cross-platform applications using React Native. Implemented advanced features including real-time chat, push notifications, and seamless payment integrations. Improved app performance by 40% through optimization techniques.</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>Jan 2023 - May 2024</div>
                <h3>Full Stack Developer - Digital Solutions Ltd.</h3>
                <p>Developed and maintained multiple web applications using MERN stack. Collaborated with design team to implement responsive UI/UX designs. Successfully deployed 15+ projects with 99.9% uptime and handled over 100K+ daily active users.</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>July 2022 - Dec 2022</div>
                <h3>Frontend Developer Intern - StartUp Hub</h3>
                <p>Worked on building interactive user interfaces using React.js and modern CSS frameworks. Participated in daily stand-ups and sprint planning. Contributed to the development of company's main product dashboard used by 5000+ clients.</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>March 2022 - June 2022</div>
                <h3>Freelance Web Developer</h3>
                <p>Built custom websites for small businesses and startups. Managed end-to-end project delivery including client communication, design implementation, and deployment. Successfully completed 10+ projects with 5-star client ratings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
