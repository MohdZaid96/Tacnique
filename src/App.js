import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const [page,setpage]=useState(1);
  localStorage.setItem("setpage",setpage);
  const handleLi = () => {
    const liElements = [];

    for (let i = 1; i <= page; i++) {
      liElements.push(
        <li className="page-item" key={i}>
          <a className="page-link" href="#">
            {i}
          </a>
        </li>
      );
    }

    return liElements;
  };
  return (
    <div className="App">
      <AllRoutes />
      <div className="mb-4 d-flex justify-content-center">      
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>          
            {handleLi()}
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default App;
