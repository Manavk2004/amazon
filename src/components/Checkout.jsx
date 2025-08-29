import React from 'react'
import "../css/Checkout.css"
import Ad from "../assets/ad.png"
import SubTotal from "./SubTotal.jsx"
import { useStateValue } from "../StateProvider.jsx"
import CheckoutProduct from './CheckoutProduct.jsx'


function Checkout() {
    const [ { basket }, dispatch ] = useStateValue()


  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={Ad} />
        <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {basket.map((item) => (
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  )
}

export default Checkout
