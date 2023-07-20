import React from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
function App() {
  return (
    //BEM
    <BrowserRouter>
      <div className="app">
      <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <div>
                
                <Checkout/>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
               
                <Home />
              </div>
            }
          />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
