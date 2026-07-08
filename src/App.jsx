import { Routes, Route, Navigate } from 'react-router-dom'
import {
  HomePage,
  AboutPage,
  ProjectsPage,
  ProjectDetailsPage,
} from '@pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/project-details/:projectId" element={<ProjectDetailsPage />} />
      {/* Redirect old routes */}
      <Route path="/major-projects" element={<Navigate to="/projects" replace />} />
      <Route path="/minor-projects" element={<Navigate to="/projects" replace />} />
    </Routes>
  )
}

export default App
