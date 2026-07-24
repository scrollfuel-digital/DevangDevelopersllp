import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <Routes>
        <Route path="/" element={<AppRouter />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;