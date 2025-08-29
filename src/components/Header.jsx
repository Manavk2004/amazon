import { useState, useEffect, React } from 'react'
import "../css/Header.css"
import amazon1 from "../assets/amazon1.png"
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom"
import { useStateValue } from "../StateProvider.jsx"


export function Header() {

  const [ { basket } , dispatch] = useStateValue()

  return (
    <div className='header'>
      <Link to="/">
        <img className="header__logo" src={amazon1} />
      </Link>

        <div className="header__search">
            <input type="text" className="header__SearchInput" />
            <SearchIcon className="header__searchIcon" />
            {/* {Logo} */}
        </div>

        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>

            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>

            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
              <div className="header__optionBasket">
                <AddShoppingCartIcon className="header__shoppingCart" />
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
            </Link>

        </div>
    </div>
  )
}


