import React from 'react'

function Projects() {
  const handleMinorProjects = () => {
    window.location.href = 'minor-projects.html';
  }

  const handleMajorProjects = () => {
    window.location.href = 'major-projects.html';
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="heading">My <span>Projects</span></h2>
        <div className="project-buttons">
          <button className="project-btn" id="minorProjectsBtn" onClick={handleMinorProjects}>Minor Projects</button>
          <button className="project-btn" id="majorProjectsBtn" onClick={handleMajorProjects}>Major Projects</button>
        </div>
      </div>
    </section>
  )
}

export default Projects
