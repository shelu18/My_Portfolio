import { Link } from 'react-router-dom'
import ProjectCard from '@components/ProjectCard/ProjectCard'
import { getFeaturedProjects } from '@data/projects'
import '@styles/projects.css'

function Projects() {
  const featured = getFeaturedProjects()

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="heading reveal">
          My <span>Projects</span>
        </h2>
        <p className="section-subtitle reveal">
          A curated collection of projects that reflect my journey — from concept
          to deployment.
        </p>

        <div className="projects-grid reveal-stagger">
          {featured.map((project, i) => (
            <div className="reveal" key={project.id}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        <div className="projects-cta reveal">
          <Link to="/projects" className="btn-view-all">
            View All Projects
            <i className="bx bx-right-arrow-alt" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
