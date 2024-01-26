import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
    
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
