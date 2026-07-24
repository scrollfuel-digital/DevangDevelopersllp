import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Gallery />
      <Blog />
    </>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}