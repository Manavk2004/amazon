import React from 'react'
import "../css/Checkout.css"
import Ad from "../assets/ad.png"
import SubTotal from "./SubTotal.jsx"


function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={Ad} />
        <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  )
}

export default Checkout
