import { SOCIAL_LINKS, PERSONAL_INFO } from '@utils/constants'

function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hey, I'm <span>{PERSONAL_INFO.name}</span></h1>
        <div className="text-animate">
          <h3>{PERSONAL_INFO.role}</h3>
        </div>
        <p>{PERSONAL_INFO.tagline}</p>
        <div className="btn-box">
          <a href={PERSONAL_INFO.whatsappLink} className="btn">Let's Talk</a>
          <a href={PERSONAL_INFO.resumePath} download="react-native-resume.pdf" className="btn">Download CV</a>
        </div>
      </div>
      <div className="home-sci">
        <a href={SOCIAL_LINKS.twitter}><i className='bx bxl-twitter'></i></a>
        <a href={SOCIAL_LINKS.linkedin}><i className='bx bxl-linkedin'></i></a>
        <a href={SOCIAL_LINKS.instagram}><i className='bx bxl-instagram'></i></a>
        <a href={SOCIAL_LINKS.github}><i className='bx bxl-github'></i></a>
      </div>
      <div className="home-imgHover"></div>
    </section>
  )
}

export default Hero
