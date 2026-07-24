import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <main>
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}

export default App;