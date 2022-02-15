import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageDetails from "./components/ImageDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ImageDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
