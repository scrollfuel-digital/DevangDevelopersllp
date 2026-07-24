import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-[#fef9e2]">
      <Navbar />

      <Routes>
        <Route path="/" element={<AppRouter />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;