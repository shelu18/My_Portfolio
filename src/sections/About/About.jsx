import { ABOUT_TEXT } from '@utils/constants'

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading reveal">About <span>Me</span></h2>
      <div className="about-content reveal">
        {ABOUT_TEXT.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About
