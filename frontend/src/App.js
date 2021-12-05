
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Option from "./pages/Option"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/option" element={<Option />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;