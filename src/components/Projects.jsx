import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="heading">My <span>Projects</span></h2>
        <div className="project-buttons">
          <Link to="/minor-projects" className="project-btn" id="minorProjectsBtn">Minor Projects</Link>
          <Link to="/major-projects" className="project-btn" id="majorProjectsBtn">Major Projects</Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
