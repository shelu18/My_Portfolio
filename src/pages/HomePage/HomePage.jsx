import { Header, Footer } from '@components'
import { Hero, About, Experience, Education, Projects, Skills, Contact } from '@sections'
import { useScrollSpy, useScrollReveal } from '@hooks'

function HomePage() {
  useScrollSpy()
  useScrollReveal()

  return (
    <>
      <Header />
      <Hero />
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

export default HomePage
