import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MajorProjects from './pages/MajorProjects'
import MinorProjects from './pages/MinorProjects'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/major-projects" element={<MajorProjects />} />
      <Route path="/minor-projects" element={<MinorProjects />} />
      <Route path="/project-details/:projectId" element={<ProjectDetails />} />
    </Routes>
  )
}

export default App
