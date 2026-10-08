function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="heading reveal">Work <span>Experience</span></h2>
      <div className="experience-row">
        <div className="experience-column">
          <h3 className="title">Professional Experience</h3>
          <div className="experience-box">
            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>Dec 2025 – Present</div>
                <h3>React Native Developer — Yuvasoft Solutions Pvt Ltd</h3>
                <p>Engineering on MagicalSwap (rental solution app with 5,000+ active users). Implemented Branch.io deep linking for smart app links and marketing attribution. Managed version rollouts across Google Play Console and App Store Connect, drove React Native and Android build upgrades, and maintained production stability through comprehensive regression testing across core property and tenant flows.</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>Jan 2025 – Dec 2025</div>
                <h3>React Native Developer — Ultraxpert Technologies Pvt Ltd</h3>
                <p>Built Drinking Buddy (social networking app) with real-time Socket.IO chat, Google Maps SDK venue discovery, OAuth 2.0 authentication, and in-app payments. Developed CRM Autodialer with FCM push notifications, native auto-dial, and call tracking. Managed EAS builds for both App Store and Play Store.</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>Jun 2024 – Aug 2024</div>
                <h3>SDE Intern — Site Guru and Websotech</h3>
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
