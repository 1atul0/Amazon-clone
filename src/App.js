import React from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js"
function App() {
  return (
    //BEM
    <BrowserRouter>
      <div className="app">
    
        <Routes>
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout/>
              </div>
            }
          />

          <Route
            path="/login"
            element={
              <div>
                <Login/>
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div>
                <Header />
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
