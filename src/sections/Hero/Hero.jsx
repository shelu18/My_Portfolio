import { SOCIAL_LINKS, PERSONAL_INFO, BASE_URL } from '@utils/constants'

function Hero() {
  return (
    <section className="home" id="home">
      {/* Left side — Text content with flying animations */}
      <div className="home-content">
        <div className="hero-name-block">
          <h1 className="hero-line hero-line-1">
            Hi, I'm
          </h1>
          <h1 className="hero-line hero-line-2 hero-name-float">
            <span>{PERSONAL_INFO.name.split(' ')[0]}</span>
          </h1>
          <h1 className="hero-line hero-line-3">
            {PERSONAL_INFO.name.split(' ')[1]}
          </h1>
        </div>

        <div className="hero-role">
          <h3>{PERSONAL_INFO.role}</h3>
        </div>

        <p className="hero-tagline">{PERSONAL_INFO.tagline}</p>

        <div className="hero-info-row">
          <div className="hero-info-group">
            <span className="hero-info-label">FIND ME ON</span>
            <div className="hero-social">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-social="linkedin">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-social="github">
                <i className='bx bxl-github'></i>
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" data-social="twitter">
                <i className='bx bxl-twitter'></i>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-social="instagram">
                <i className='bx bxl-instagram'></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <a href={PERSONAL_INFO.whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Let's Talk
          </a>
          <a href={PERSONAL_INFO.resumePath} download="react-native-resume.pdf" className="btn btn-outline">
            Download CV
          </a>
        </div>
      </div>

      {/* Right side — Portrait with glow */}
      <div className="home-portrait">
        <div className="portrait-glow"></div>
        <div className="portrait-wrapper">
          <img
            src={`${BASE_URL}images/sheluji.jpeg`}
            alt={PERSONAL_INFO.name}
            className="portrait-img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
