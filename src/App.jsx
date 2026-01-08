import { useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Menu icon toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon && navbar) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      }
    }

    // Scroll sections
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            const activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
          });
        }
      });

      // Sticky header
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }

      // Remove toggle icon and navbar when click navbar links
      if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
