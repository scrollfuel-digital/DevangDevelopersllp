import React from 'react'
import Gallery from './Gallery'
import Home from './Home'
import Contact from './Contact'
import Blog from './Blog'
import About from '../components/ui/Aboutus'
import Project from '../components/ui/project'
import HomeGallery from '../components/ui/HomeGallery';


const Hero = () => {
    return (
        <>
            <Home />
            <About />
            <Project />
            <HomeGallery />
         
        </>
    )
}

export default Hero