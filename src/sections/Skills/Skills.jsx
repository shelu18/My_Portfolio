import { skillCategories } from '@data/skills'
import '@styles/skills.css'

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="heading reveal">
        My <span>Skills</span>
      </h2>
      <p className="section-subtitle reveal">
        Technologies &amp; tools I use to build high-quality mobile and web
        experiences.
      </p>

      <div className="skills-grid reveal-stagger">
        {skillCategories.map((category, catIdx) => (
          <div
            className="skill-card reveal"
            key={category.title}
            style={{ transitionDelay: `${catIdx * 0.06}s` }}
          >
            {/* Card header */}
            <div className="skill-card__header">
              <div className="skill-card__icon-wrap">
                <i className={`bx ${category.icon}`} />
              </div>
              <h3 className="skill-card__title">{category.title}</h3>
            </div>

            {/* Skills list */}
            <div className="skill-card__items">
              {category.skills.map((skill) => (
                <div className="skill-chip" key={skill.name}>
                  <i className={`bx ${skill.icon} skill-chip__icon`} />
                  <span className="skill-chip__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
