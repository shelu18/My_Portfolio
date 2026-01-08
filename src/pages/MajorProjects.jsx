import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function MajorProjects() {
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

  const majorProjects = [
    {
      id: 'portfolio',
      image: 'images/projectimages/portfolio.jpg',
      title: 'Personal Portfolio website',
      description: 'A fully responsive personal portfolio website using HTML, CSS, and JS.',
      githubLink: 'https://shelu18.github.io/My_Portfolio/',
      detailsLink: '/project-details/portfolio'
    },
    {
      id: 'chat-app',
      image: 'images/chat_app.jpg',
      title: 'Real Time Chat Application',
      description: 'A Real Time chat application built using MERN Stack.',
      githubLink: 'https://github.com/satwiktiwari22/Minor.git',
      detailsLink: '/project-details/chat-app'
    },
    {
      id: 'sih-2024',
      image: 'images/projectimages/digifasalimg.jpg',
      title: 'SIH 2024 Project',
      description: 'A project developed for SIH 2024, potentially also a chat application or other concept using MERN Stack.',
      githubLink: 'https://github.com/somtyagi20/SIH2024',
      detailsLink: '/project-details/sih-2024'
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

export default MajorProjects
