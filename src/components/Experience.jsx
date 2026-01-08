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
                <div className="year"><i className='bx bxs-calendar'></i>Dec 2024 - Present</div>
                <h3>React Native Developer - Yuvasoft Solutions Pvt Ltd</h3>
                <p>Working on Magical Swap, a rental solution application. Upgraded app version and significantly improved performance. Managing cross-platform development for Android and iOS with focus on optimization and user experience.</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>Apr 2024 - Dec 2024</div>
                <h3>React Native Developer - Ultraxpert Technologies Pvt Ltd</h3>
                <p>Developed Drinking Buddy (social networking app) with real-time chat, Google Maps integration, and payment gateway. Built CRM Autodialer app with FCM push notifications and auto-dial functionality. Implemented secure authentication using OAuth 2.0 and managed EAS builds for Play Store/App Store deployment.</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>June 2024 - Aug 2024</div>
                <h3>SDE Intern - Site Guru and Websotech</h3>
                <p>Built responsive web dashboards using Vue.js and Vuetify, reducing page load times by ~40%. Developed authentication flows and integrated backend APIs serving 100+ daily users. Fixed production issues to improve system reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
