import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Hero from "./pages/Hero";
import { Project } from "./pages/Project";
import RiddhiSiddhi from "./pages/RiddhiSiddhi";

function App() {
  return (
    <div className="min-h-screen bg-[#fef9e2]">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="bg-[#fef9e2]">
              <Hero />
              <Project />
            </div>
          }
        />

        {/* Riddhi Siddhi Project  Page */}
        <Route
          path="/riddhi-siddhi"
          element={<RiddhiSiddhi />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;