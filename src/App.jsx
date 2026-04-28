import { Routes, Route } from 'react-router-dom'
import StudyPage from './pages/StudyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudyPage />} />
    </Routes>
  )
}

export default App