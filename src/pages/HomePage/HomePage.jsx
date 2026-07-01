import { Header, Footer } from '@components'
import { Hero, About, Experience, Education, Projects, Skills, Contact } from '@sections'
import { useScrollSpy } from '@hooks'

function HomePage() {
  useScrollSpy()

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
