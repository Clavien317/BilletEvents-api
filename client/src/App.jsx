import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Evennements from './pages/Evennements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path='/evennement' element={<Evennements />} />
      </Routes>
    </Router>
  )
}

export default App