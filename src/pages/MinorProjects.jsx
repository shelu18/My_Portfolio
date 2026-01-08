import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MinorProjects() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const minorProjects = [
    {
      id: 1,
      image: 'images/project11.jpg',
      title: 'Simple Calculator',
      description: 'This is Simple calculator i made this using html, css and js',
      link: 'https://shelu18.github.io/calculator_project/'
    },
    {
      id: 2,
      image: 'images/project4.jpg',
      title: 'Parallax Website',
      description: 'Parallax Website',
      link: 'https://shelu18.github.io/Miniproject2_parallaxWebsite/'
    },
    {
      id: 3,
      image: 'images/projectimg.jpg',
      title: 'Random Advice Generator',
      description: 'Random Advice Generator',
      link: 'https://advice-generator-project-amber.vercel.app/'
    },
    {
      id: 4,
      image: 'images/color-changer.png',
      title: 'Color Scheme Switcher',
      description: 'clicking on one of the of the mentioned colors to change the background color of the page',
      link: 'https://shelu18.github.io/mini2-background-color/'
    }
  ]

  return (
    <>
      <div onClick={handleBackClick} className="back-btn" style={{ 
        position: 'fixed', 
        top: '20px', 
        left: '20px', 
        fontSize: '1.8rem',
        color: 'var(--main-color)',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 25px',
        background: 'var(--second-bg-color)',
        borderRadius: '10px',
        border: '2px solid var(--main-color)',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 10px rgba(0, 221, 255, 0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--main-color)'
        e.currentTarget.style.color = 'var(--bg-color)'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 221, 255, 0.6)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--second-bg-color)'
        e.currentTarget.style.color = 'var(--main-color)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 221, 255, 0.3)'
      }}>
        <i className="fa fa-arrow-left"></i> Back to Projects
      </div>

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

export default MinorProjects
