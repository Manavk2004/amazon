import { useState, useEffect, React } from 'react'
import './css/App.css'
import {Header} from "./components/header.jsx"
import Checkout from "./components/Checkout.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase.jsx"
import { useStateValue } from './StateProvider.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    onAuthStateChanged(auth, (user => {
      console.log("THE USER IS", user)
      if(user){
        dispatch({
          type: "SET_USER",
          user: user
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    }))
  }, [])

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
              <Route path="/login"
                element={
                  <Login />
                }
              />
              <Route path="/" 
                element={
                  <>
                    <Header />
                    <Home />
                  </>
                } 
              />
              <Route path="/checkout"
                element={
                  <>
                    <Header />
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
