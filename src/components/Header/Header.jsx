import { PERSONAL_INFO } from '@utils/constants'

function Header() {
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
        <a href="#contact">Contact</a>
        <span className="active-nav"></span>
      </nav>
      <a href={PERSONAL_INFO.whatsappLink} className="header-cta" target="_blank" rel="noopener noreferrer">
        Hire Me
      </a>
    </header>
  )
}

export default Header
