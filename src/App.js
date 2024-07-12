import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import PageBuy from "./PageBuy/PageBuy";
// import "./App.css";
import Finalize from "./Finalize/Finalize";
import About from "./About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pageBuy" element={<PageBuy />} />
        <Route path="/finalize" element={<Finalize />} />
      </Routes>
    </Router>
  );
}

export default App;
