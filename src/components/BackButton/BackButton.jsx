import { useNavigate } from 'react-router-dom'

/**
 * Reusable back button component used on MajorProjects, MinorProjects, and ProjectDetails pages.
 * Navigates back to the home page and optionally scrolls to a target section.
 *
 * @param {Object} props
 * @param {string} props.label - Button text (e.g. "Back to Projects")
 * @param {string} [props.to] - Navigation target (defaults to '/')
 * @param {string} [props.scrollTo] - Section ID to scroll to after navigation
 */
function BackButton({ label = 'Back to Projects', to = '/', scrollTo }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(to)
    if (scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(scrollTo)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="back-button" onClick={handleClick}>
      <i className="bx bx-arrow-back"></i> {label}
    </div>
  )
}

export default BackButton
