import { BASE_URL } from '@utils/constants'

function Education() {
  return (
    <>
      <section className="education" id="education">
        <h2 className="heading reveal">My <span>Education</span></h2>
        <div className="education-single-wrap reveal">
          <div className="edu-card">
            <div className="edu-card__header">
              <div className="edu-card__icon-wrap">
                <i className='bx bxs-graduation'></i>
              </div>
              <div className="edu-card__meta">
                <span className="edu-card__badge">
                  <i className='bx bx-calendar'></i> 2021 – 2025
                </span>
                <span className="edu-card__degree-type">Bachelor's Degree</span>
              </div>
            </div>

            <div className="edu-card__body">
              <h3 className="edu-card__degree">Bachelor of Technology (B.Tech)</h3>
              <h4 className="edu-card__institute">
                Acropolis Institute Of Technology And Research
              </h4>
              <p className="edu-card__desc">
                Computer Science & Engineering. Focused on software engineering, data structures & algorithms, and mobile/web technologies.
              </p>
            </div>

            <div className="edu-card__footer">
              <div className="edu-card__tag">
                <i className='bx bx-code-alt'></i> Computer Science
              </div>
              <div className="edu-card__tag">
                <i className='bx bx-map-pin'></i> Indore, India
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements" id="achievements">
        <h2 className="heading reveal">Achievements <span>& Certifications</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title"></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>December 2024</div>
                  <h3>SIH 2024 Finalist — Top 1% of 500 Teams</h3>
                  <p>Smart India Hackathon finalist with an IoT-based smart agriculture solution. Problem Statement: 1639 · Team: Go Pandas · Solution: AI/ML and IoT Sensors Based Smart Fertilizer Recommendation System.</p>
                  <a href={`${BASE_URL}cv/certificate (1).pdf`} target="_blank" rel="noopener noreferrer">
                    <button className="crt-btn">View Certificate</button>
                  </a>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>December 2024</div>
                  <h3>Published Research Paper — IJARESM</h3>
                  <p>"AURA: AI/ML–IoT Based Smart Home Solution" — published in the International Journal of All Research Education and Scientific Methods (IJARESM), December 2024.</p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>April 2024</div>
                  <h3>Meta Advanced React — Coursera</h3>
                  <p>Meta-certified in Advanced React concepts including component composition, performance optimization, and testing patterns.</p>
                  <a href={`${BASE_URL}cv/meta advanced react.jpg`} target="_blank" rel="noopener noreferrer">
                    <button className="crt-btn">View Certificate</button>
                  </a>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i>May 2024</div>
                  <h3>NPTEL — Computer Networks</h3>
                  <p>NPTEL certified in Computer Networks fundamentals.</p>
                  <a href={`${BASE_URL}cv/cn_nptel.jpg`} target="_blank" rel="noopener noreferrer">
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
