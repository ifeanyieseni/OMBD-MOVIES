import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie'
import WatchList from './pages/WatchList'
// import components
import Header from './components/Header'

function App() {
  return (
    <div className='antialiased '>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='watchlist' element={<WatchList />} />
      </Routes>
    </div>
  )
}

export default App
