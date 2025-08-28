import { useState, useEffect, React } from 'react'
import './css/App.css'
import {Header} from "./components/header.jsx"
import Checkout from "./components/Checkout.jsx"
import Home from "./components/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" 
              element={
                <>
                  <Home />
                </>
              } 
            />
            <Route path="/checkout"
              element={
                <>
                  <Checkout />
                </>
              }
            />



          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
