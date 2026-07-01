import { Link } from 'react-router-dom'
import { BackButton } from '@components'
import { majorProjects } from '@data/projects'

function MajorProjectsPage() {
  return (
    <>
      <BackButton label="Back to Projects" scrollTo="projects" />

      <section className="projects" id="projects">
        <div className="container">
          <h2 className="heading">Major <span>Projects</span></h2>
          <div className="project-cards">
            {majorProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-buttons">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                    See Code
                  </a>
                  <Link to={project.detailsLink} className="btn">
                    More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MajorProjectsPage
