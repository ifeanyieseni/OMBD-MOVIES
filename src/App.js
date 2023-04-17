import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'
// import components
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
      </Routes>
    </div>
  )
}

export default App
