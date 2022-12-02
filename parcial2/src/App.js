import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bandas from "./Bandas";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bandas/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
