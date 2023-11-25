import React from "react";
import { Login } from "./Login";
import "./App.css";
import { NavLink, Link, Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
