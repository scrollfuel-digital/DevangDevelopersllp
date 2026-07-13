import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Hero from './pages/Hero';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <div className="bg-[#fef9e2] h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
