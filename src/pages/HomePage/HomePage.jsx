import { Header, Footer } from '@components'
import { Hero, About, Projects, Experience, Education, Skills, Services, Contact } from '@sections'
import { useScrollSpy, useScrollReveal } from '@hooks'

function HomePage() {
  useScrollSpy()
  useScrollReveal()

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
