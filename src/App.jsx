import { useState, useEffect, React } from 'react'
import './css/App.css'
import {Header} from "./components/header.jsx"
import Home from "./components/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={
              <>
                <Header/>
                <Home />
              </>} 
            />

          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
