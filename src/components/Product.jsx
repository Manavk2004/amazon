import React from 'react'
import "../css/Product.css"
import Cartier from "../assets/cartier.png"

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_, i) => {
                return <p>🌟</p>
            })}
        </div>
      </div>
      <img src={image} />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product
