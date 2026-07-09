import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projectDetails } from '@data/projects'
import { BackButton } from '@components'
import '@styles/project-details.css'

function ProjectDetailsPage() {
  const { projectId } = useParams()
  const project = projectDetails[projectId] || projectDetails.magicalswap

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  return (
    <div className="pd-page">
      <BackButton label="Back to Projects" scrollTo="projects" />

      <div className="pd-container">
        {/* Hero */}
        <header className="pd-hero">
          <h1 className="pd-title">{project.title}</h1>

          {/* Tech tags */}
          <div className="pd-tags">
            {project.technologies.map((tech) => (
              <span className="pd-tag" key={tech}>{tech}</span>
            ))}
          </div>
        </header>

        {/* Cover image */}
        {project.images?.[0] && (
          <div className="pd-cover">
            <img src={project.images[0]} alt={project.title} />
          </div>
        )}

        {/* Content grid — all info in one flowing layout */}
        <div className="pd-content">
          {/* Overview */}
          <div className="pd-block">
            <h2 className="pd-block__heading">Overview</h2>
            <p className="pd-block__text">{project.overview}</p>
          </div>

          {/* Problem + Role side by side on desktop */}
          {(project.problem || project.role) && (
            <div className="pd-two-col">
              {project.problem && (
                <div className="pd-block">
                  <h2 className="pd-block__heading">The Problem</h2>
                  <p className="pd-block__text">{project.problem}</p>
                </div>
              )}
              {project.role && (
                <div className="pd-block">
                  <h2 className="pd-block__heading">My Role</h2>
                  <p className="pd-block__text">{project.role}</p>
                </div>
              )}
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="pd-block pd-block--highlight">
              <h2 className="pd-block__heading">Outcome</h2>
              <p className="pd-block__text">{project.outcome}</p>
            </div>
          )}

          {/* Key Features */}
          <div className="pd-block">
            <h2 className="pd-block__heading">Key Features</h2>
            <ul className="pd-features">
              {project.features.map((feature, i) => (
                <li key={i}>
                  <i className="bx bx-check-circle" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional screenshots */}
          {project.images?.length > 1 && (
            <div className="pd-block">
              <h2 className="pd-block__heading">Screenshots</h2>
              <div className="pd-gallery">
                {project.images.slice(1).map((img, i) => (
                  <div className="pd-gallery__item" key={i}>
                    <img src={img} alt={`${project.title} screenshot ${i + 2}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="pd-footer-cta">
          <p>Interested in working together?</p>
          <a href="/#contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
