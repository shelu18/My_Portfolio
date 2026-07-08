import { useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

/**
 * ProjectCard — A premium social-media-preview style project card.
 *
 * Features:
 *  - Cover image with gradient overlay
 *  - 3D tilt parallax on mouse move
 *  - Tech tag pills
 *  - GitHub icon + "Read more" CTA
 *  - Scroll-reveal ready (add className="reveal" externally)
 */
function ProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  /* ── 3D tilt on mouse move ── */
  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -6 // max ±6°
    const rotateY = ((x - centerX) / centerX) * 6

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`

    // Move glow to follow cursor
    if (glowRef.current) {
      glowRef.current.style.opacity = '1'
      glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 60, 92, 0.15), transparent 60%)`
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = ''
    if (glowRef.current) {
      glowRef.current.style.opacity = '0'
    }
  }, [])

  return (
    <article
      ref={cardRef}
      className="pcard"
      style={{ transitionDelay: `${index * 0.1}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id={`project-card-${project.id}`}
    >
      {/* Cursor-following glow overlay */}
      <div className="pcard__glow" ref={glowRef} />

      {/* Cover image */}
      <div className="pcard__img-wrap">
        <img
          src={project.coverImage}
          alt={project.title}
          className="pcard__img"
          loading="lazy"
        />
        <div className="pcard__img-overlay" />
      </div>

      {/* Content */}
      <div className="pcard__body">
        {/* Title row with GitHub icon */}
        <div className="pcard__title-row">
          <h3 className="pcard__title">{project.title}</h3>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard__github"
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <i className="bx bxl-github" />
            </a>
          )}
        </div>

        {/* Tech tags */}
        <div className="pcard__tags">
          {project.tags.map((tag) => (
            <span className="pcard__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="pcard__desc">{project.description}</p>

        {/* CTA */}
        <Link to={project.detailsLink} className="pcard__cta">
          Read more
          <i className="bx bx-right-arrow-alt" />
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
