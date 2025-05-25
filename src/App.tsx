import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prediksi from "./pages/Prediksi";
import Navbar from "./components/Navbar";
import Tentang from "./pages/Tentang";
import Panduan from "./pages/Panduan";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediksi" element={<Prediksi />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/panduan" element={<Panduan />} />
      </Routes>
    </>
  );
}

export default App;
