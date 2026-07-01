import { Routes, Route } from 'react-router-dom'
import {
  HomePage,
  AboutPage,
  MajorProjectsPage,
  MinorProjectsPage,
  ProjectDetailsPage,
} from '@pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/major-projects" element={<MajorProjectsPage />} />
      <Route path="/minor-projects" element={<MinorProjectsPage />} />
      <Route path="/project-details/:projectId" element={<ProjectDetailsPage />} />
    </Routes>
  )
}

export default App
