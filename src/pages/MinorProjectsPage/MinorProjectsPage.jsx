import { BackButton } from '@components'
import { minorProjects } from '@data/projects'

function MinorProjectsPage() {
  return (
    <>
      <BackButton label="Back to Projects" scrollTo="projects" />

      <section className="projects" id="projects">
        <div className="container">
          <h2 className="heading">Minor <span>Projects</span></h2>
          <div className="project-cards">
            {minorProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="btn">View Project</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MinorProjectsPage
