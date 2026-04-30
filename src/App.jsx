import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StudyPage from './pages/StudyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/temari" element={<StudyPage />} />
    </Routes>
  )
}

export default App