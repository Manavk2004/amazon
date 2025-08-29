import React from 'react'
import "../css/SubTotal.css"
import { NumericFormat } from "react-number-format"
import { useStateValue } from "../StateProvider.jsx"
import { getBasketTotal } from '../reducer.jsx'

function SubTotal() {
    const [{ basket }, dispatch ] = useStateValue()

    console.log("The basket", basket)
    console.log(getBasketTotal(basket))

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}  
        displayType="text"
        thousandSeparator={true}
        prefix="$"
        decimalScale={2}
        fixedDecimalScale
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal
