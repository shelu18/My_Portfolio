import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectDetails } from '@data/projects'
import '@styles/project-details.css'

function ProjectDetailsPage() {
  const { projectId } = useParams()
  const [currentSlide, setCurrentSlide] = useState(0)

  const project = projectDetails[projectId] || projectDetails.magicalswap

  const plusSlides = (n) => {
    let newSlide = currentSlide + n
    if (newSlide >= project.images.length) newSlide = 0
    if (newSlide < 0) newSlide = project.images.length - 1
    setCurrentSlide(newSlide)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [projectId])

  return (
    <>
      <Link to="/projects" className="back-to-projects-btn">
        <i className="bx bx-arrow-back"></i> Back to Projects
      </Link>

      <div className="project-detail-container">
        <h1>{project.title}</h1>

        <section className="project-overview">
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </section>

        {project.problem && (
          <section className="project-overview">
            <h2>The Problem</h2>
            <p>{project.problem}</p>
          </section>
        )}

        {project.role && (
          <section className="project-overview">
            <h2>My Role</h2>
            <p>{project.role}</p>
          </section>
        )}

        {project.outcome && (
          <section className="project-overview">
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </section>
        )}

        <section className="project-image-carousel">
          <h2>Project Screenshots</h2>
          <div className="carousel-container">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="carousel-slide"
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                <img src={image} alt={`${project.title} Screenshot ${index + 1}`} />
              </div>
            ))}
            {project.images.length > 1 && (
              <>
                <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
                <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
              </>
            )}
          </div>
        </section>

        <section className="project-features">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-technologies">
          <h2>Technologies Used</h2>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Shailendra. All rights reserved.</p>
      </footer>
    </>
  )
}

export default ProjectDetailsPage
