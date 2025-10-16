import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import ProtectedRoute from './components/ProtectedRoute'
import About from './components/About'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<ProtectedRoute><Courses /></ProtectedRoute>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </>
  )
}

export default App