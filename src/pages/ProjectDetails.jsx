import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/project-details.css'

function ProjectDetails() {
  const { projectId } = useParams()
  const [currentSlide, setCurrentSlide] = useState(0)
  const baseUrl = import.meta.env.BASE_URL || '/'

  const projectData = {
    portfolio: {
      title: 'Personal Portfolio Website',
      overview: `This project is a comprehensive personal portfolio website designed to showcase my skills,
        projects, and experiences. It's built with a focus on responsiveness and a clean user interface.
        The primary technologies used are HTML5 for structure, CSS3 for styling (including Flexbox/Grid
        for layout and animations), and JavaScript for interactive elements like a theme switcher,
        typed.js animations, and smooth scrolling.`,
      features: [
        'Fully Responsive Design: Adapts to all screen sizes (desktops, tablets, mobiles).',
        'Interactive Animations: Engaging user experience with CSS and JavaScript animations.',
        'Dynamic Content: JavaScript for typed text effects and potentially fetching project data.',
        'Theme Switcher: (If applicable) Allows users to toggle between light and dark mode.',
        'Smooth Scrolling: For easy navigation through sections.',
        'Contact Form: (If applicable) With validation and submission capabilities.',
        'Project Showcase: Clear presentation of various projects with links and descriptions.'
      ],
      images: [
        `${baseUrl}images/projectimages/portfolio.jpg`,
        `${baseUrl}images/projectimages/portfolio2.jpg`,
        `${baseUrl}images/projectimages/portfolio3.png`
      ],
      technologies: ['HTML5', 'CSS3 (Flexbox, Grid, Animations)', 'JavaScript (ES6+)']
    },
    'chat-app': {
      title: 'Real Time Chat Application',
      overview: `A real-time chat application built with the MERN stack. This application allows users to 
        communicate instantly with features like real-time messaging, user authentication, and a modern UI.`,
      features: [
        'Real-time messaging using Socket.IO',
        'User authentication and authorization',
        'Modern and responsive UI',
        'Message history and persistence',
        'Online status indicators'
      ],
      images: [`${baseUrl}images/chat_app.jpg`],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO']
    },
    'sih-2024': {
      title: 'SIH 2024 Project',
      overview: `A project developed for Smart India Hackathon 2024. This project demonstrates innovative 
        solutions using the MERN stack technology.`,
      features: [
        'Innovative problem-solving approach',
        'Full-stack implementation',
        'Scalable architecture',
        'Modern development practices'
      ],
      images: [
        `${baseUrl}images/projectimages/digifasalimg.jpg`,
        `${baseUrl}images/projectimages/digifasalimg2.jpg`,
        `${baseUrl}images/projectimages/digifasal3.jpg`
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js']
    }
  }

  const project = projectData[projectId] || projectData.portfolio

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
      <Link to="/major-projects" className="back-to-projects-btn">
        <i className="fas fa-arrow-left"></i> Back to Projects
      </Link>

      <div className="project-detail-container">
        <h1>{project.title}</h1>

        <section className="project-overview">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </section>

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

export default ProjectDetails
