import { useEffect } from 'react'

/**
 * Custom hook that handles:
 * - Scroll spy: highlights the active nav link based on scroll position
 * - Sticky header: adds 'sticky' class to header when scrolled past 100px
 * - Mobile menu: toggles the mobile navbar and closes it on scroll
 */
export function useScrollSpy() {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon')
    const navbar = document.querySelector('.navbar')

    if (menuIcon && navbar) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x')
        navbar.classList.toggle('active')
      }
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const navLinks = document.querySelectorAll('header nav a')

      // Map certain sections to a different nav link
      // (experience & education are grouped under "about" in the nav)
      const sectionToNav = {
        experience: 'about',
        education: 'about',
        achievements: 'about',
      }

      sections.forEach((sec) => {
        const top = window.scrollY
        const offset = sec.offsetTop - 100
        const height = sec.offsetHeight
        const id = sec.getAttribute('id')
        const navId = sectionToNav[id] || id

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove('active')
            const activeLink = document.querySelector(
              'header nav a[href*=' + navId + ']'
            )
            if (activeLink) activeLink.classList.add('active')
          })
        }
      })

      const header = document.querySelector('header')
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100)
      }

      if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x')
        navbar.classList.remove('active')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
