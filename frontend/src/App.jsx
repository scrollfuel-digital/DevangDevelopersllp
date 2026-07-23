import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Hero from "./pages/Hero";
import { Project } from "./pages/Project";


function App() {
  return (
    <div className="min-h-screen bg-[#fef9e2]">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={ <Hero /> }
        />
        <Route
          path="/projects/riddhi-siddhi"
          element={ <Project /> }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;