import React from 'react'
import Home from '../pages/Home'
import Project from '../pages/Project'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Blog from '../pages/Blog'

const AppRouter = () => {
  return (
    <>
        <Home />
        <About />
        <Project />
        <Gallery />
        <Blog />
        <Contact />
    </>
  )
}

export default AppRouter