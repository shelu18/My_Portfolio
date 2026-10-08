import { useEffect } from 'react'

/**
 * Custom hook that applies scroll-triggered reveal animations.
 * Elements with the class 'reveal' will fade/slide in when they enter the viewport.
 * 
 * Usage:
 *   1. Call useScrollReveal() in your page component
 *   2. Add className="reveal" to elements you want to animate
 *   3. Optional: add "reveal-left", "reveal-right", "reveal-scale" for direction variants
 *   4. Wrap children in "reveal-stagger" for staggered child animations
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target) // Only animate once
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before fully in view
      }
    )

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
