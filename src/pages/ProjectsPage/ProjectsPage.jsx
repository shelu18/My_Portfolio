import { Footer } from '@components'
import { BackButton } from '@components'
import ProjectCard from '@components/ProjectCard/ProjectCard'
import { allProjects } from '@data/projects'
import { useScrollReveal } from '@hooks'
import '@styles/projects.css'

function ProjectsPage() {
  useScrollReveal()

  return (
    <div className="projects-page">
      <BackButton label="Back to Projects" scrollTo="projects" />

      {/* Hero banner */}
      <div className="projects-page__hero">
        <span className="projects-page__hero-bg-text">Projects</span>
        <h1 className="reveal">
          All <span>Projects</span>
        </h1>
        <p className="reveal">
          Everything I've built — from full-stack applications to creative
          experiments. Each project pushed me further as a developer.
        </p>
      </div>

      {/* Projects grid */}
      <div className="projects-page__content">
        <div className="projects-page__grid reveal-stagger">
          {allProjects.map((project, i) => (
            <div className="reveal" key={project.id}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectsPage
