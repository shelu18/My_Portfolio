import React from 'react'

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>copyright &copy; 2024 by Shailendra Parihar | All Rights Reserved</p>
      </div>
      <div className="footer-iconTop">
        <a href="#" onClick={scrollToTop} title="Back to top">
          <i className='bx bx-up-arrow-alt'></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
