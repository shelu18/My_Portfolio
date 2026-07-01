/**
 * Centralized project data — single source of truth for all project pages.
 * Used by MajorProjectsPage, MinorProjectsPage, and ProjectDetailsPage.
 */

const BASE_URL = import.meta.env.BASE_URL || '/'

export const majorProjects = [
  {
    id: 'portfolio',
    image: `${BASE_URL}images/projectimages/portfolio.jpg`,
    title: 'Personal Portfolio website',
    description: 'A fully responsive personal portfolio website using HTML, CSS, and JS.',
    githubLink: 'https://shelu18.github.io/My_Portfolio/',
    detailsLink: '/project-details/portfolio',
  },
  {
    id: 'chat-app',
    image: `${BASE_URL}images/chat_app.jpg`,
    title: 'Real Time Chat Application',
    description: 'A Real Time chat application built using MERN Stack.',
    githubLink: 'https://github.com/satwiktiwari22/Minor.git',
    detailsLink: '/project-details/chat-app',
  },
  {
    id: 'sih-2024',
    image: `${BASE_URL}images/projectimages/digifasalimg.jpg`,
    title: 'SIH 2024 Project',
    description:
      'A project developed for SIH 2024, potentially also a chat application or other concept using MERN Stack.',
    githubLink: 'https://github.com/somtyagi20/SIH2024',
    detailsLink: '/project-details/sih-2024',
  },
]

export const minorProjects = [
  {
    id: 1,
    image: `${BASE_URL}images/project11.jpg`,
    title: 'Simple Calculator',
    description: 'This is Simple calculator i made this using html, css and js',
    link: 'https://shelu18.github.io/calculator_project/',
  },
  {
    id: 2,
    image: `${BASE_URL}images/project4.jpg`,
    title: 'Parallax Website',
    description: 'Parallax Website',
    link: 'https://shelu18.github.io/Miniproject2_parallaxWebsite/',
  },
  {
    id: 3,
    image: `${BASE_URL}images/projectimg.jpg`,
    title: 'Random Advice Generator',
    description: 'Random Advice Generator',
    link: 'https://advice-generator-project-amber.vercel.app/',
  },
  {
    id: 4,
    image: `${BASE_URL}images/color-changer.png`,
    title: 'Color Scheme Switcher',
    description:
      'clicking on one of the of the mentioned colors to change the background color of the page',
    link: 'https://shelu18.github.io/mini2-background-color/',
  },
]

export const projectDetails = {
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
      'Project Showcase: Clear presentation of various projects with links and descriptions.',
    ],
    images: [
      `${BASE_URL}images/projectimages/portfolio.jpg`,
      `${BASE_URL}images/projectimages/portfolio2.jpg`,
      `${BASE_URL}images/projectimages/portfolio3.png`,
    ],
    technologies: ['HTML5', 'CSS3 (Flexbox, Grid, Animations)', 'JavaScript (ES6+)'],
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
      'Online status indicators',
    ],
    images: [`${BASE_URL}images/chat_app.jpg`],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
  },
  'sih-2024': {
    title: 'SIH 2024 Project',
    overview: `A project developed for Smart India Hackathon 2024. This project demonstrates innovative 
      solutions using the MERN stack technology.`,
    features: [
      'Innovative problem-solving approach',
      'Full-stack implementation',
      'Scalable architecture',
      'Modern development practices',
    ],
    images: [
      `${BASE_URL}images/projectimages/digifasalimg.jpg`,
      `${BASE_URL}images/projectimages/digifasalimg2.jpg`,
      `${BASE_URL}images/projectimages/digifasal3.jpg`,
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
}
