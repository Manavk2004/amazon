import { useState, useEffect, React } from 'react'
import './css/App.css'
import {Header} from "./components/header.jsx"
import Home from "./components/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App
