import React from "react";
import { Login } from "./Login";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Login></Login>
    </BrowserRouter>
  );
}

export default App;
