import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Aboutus from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
// import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Hero from "../pages/Hero";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/project" element={<Project />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;