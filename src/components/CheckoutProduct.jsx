import React from 'react'
import "../css/CheckoutProduct.css"
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        console.log(id)
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

  return (
    <div className="checkoutProduct">
      <img className="checkOutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__title">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {Array(rating).fill().map(() => (
                <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct
