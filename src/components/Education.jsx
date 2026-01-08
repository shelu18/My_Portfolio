import React from 'react'

function Education() {
  const baseUrl = import.meta.env.BASE_URL || '/'
  
  return (
    <>
      <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2021-2025</div>
                  <h3>BTech - Acropolis Institute Of Technology And Research</h3>
                  <p>Enrolled in a Bachelor of Technology (B.Tech) program in Computer Science Engineering.</p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2020-2021</div>
                  <h3>Class 12th - Navodit Balniketan Higher Secondary School</h3>
                  <p>I completed the 12th grade at Navodit Balniketan Higher Secondary School, achieving a <strong>70%</strong> overall result.</p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>2018-2019</div>
                  <h3>Class 10th - South Valley International School</h3>
                  <p>At South Valley International School, I proudly completed the 10th class with a stellar performance, securing an impressive <strong>80.2%</strong> overall result.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements" id="achievements">
        <h2 className="heading">Achievements <span>& Certifications</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title"></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>April 2024</div>
                  <h3>Meta certified in advance React</h3>
                  <a href={`${baseUrl}cv/meta advanced react.jpg`} target="blank">
                    <button className="crt-btn">View Certificate</button>
                  </a>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>May 2024</div>
                  <h3>Nptel certified in computer networks</h3>
                  <p></p>
                  <a href={`${baseUrl}cv/cn_nptel.jpg`} target="blank">
                    <button className="crt-btn">View Certificate</button>
                  </a>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>December 2024</div>
                  <h3>SIH finalist 2024</h3>
                  <p>problem statement : 1639 <br /> team name : go pandas <br /> solution proposed : Ai Ml and IOT Sensors Based Smart Fertilizer Recommendation System</p>
                  <a href={`${baseUrl}cv/certificate (1).pdf`} target="blank">
                    <button className="crt-btn">View Certificate</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education
