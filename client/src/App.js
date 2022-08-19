import React from "react";
import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from "./Components/home";

function App() {

  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
    
    </>
  );
}

export default App;