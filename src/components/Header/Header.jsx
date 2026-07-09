import { PERSONAL_INFO } from '@utils/constants'
import { useTheme } from '@hooks/useTheme'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <a href="#" className="logo">
        {PERSONAL_INFO.name.split(' ')[0]}<span>.</span>
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <span className="active-nav"></span>
      </nav>
      <div className="header-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`} />
        </button>
        <a href={PERSONAL_INFO.whatsappLink} className="header-cta" target="_blank" rel="noopener noreferrer">
          Hire Me
        </a>
      </div>
    </header>
  )
}

export default Header
