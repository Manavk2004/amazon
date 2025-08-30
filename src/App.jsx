import { useState, useEffect, React } from 'react'
import './css/App.css'
import {Header} from "./components/header.jsx"
import Checkout from "./components/Checkout.jsx"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Payment from './components/Payment.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase.jsx"
import { useStateValue } from './StateProvider.jsx'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise = loadStripe("pk_live_51NXQYICvPvB2ndI1gcZ3H7GLdVcWqan2epjtVkCNdC0dvzWO1BKPwEoTNpcYCLsbp1LbXjpSSOxlCi8rHcOMvfaY00bZUIEVyQ")


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
              <Route path="/payment" element={
                <>
                  <Header/>
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              } />




          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
