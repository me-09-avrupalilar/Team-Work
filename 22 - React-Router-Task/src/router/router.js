import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import About from '../pages/about/About'
import Projects from '../pages/projects/Projects'
import NotFound from "../components/Error/NotFound"

const Router = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/project' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default Router