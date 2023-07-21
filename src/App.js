import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Holidays from "./pages/Holidays/Holidays";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/holidays" element={<Holidays />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
