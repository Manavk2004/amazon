import React from 'react'
import "../css/Home.css"
import Background from "../assets/amazon-background.jpg"
import Product from "./Product.jsx"
import Bracelet from "../assets/cartier.png"
import IpadCase from "../assets/ipad.png"
import Coffee from "../assets/coffee.png"
import Ice from "../assets/ice.png"
import JBL from "../assets/jbl.png"
import Shake from "../assets/shake.png"

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Background} />
        <div className="home__row">
            <Product title="Cartier Bracelet" price={29.99} image={Bracelet} rating={3}/>
            <Product 
                title="ProCase for iPad (A16) 11th Generation 11 Inch 2025/10th Generation 10.9 Inch 2022 Case with Pencil Holder, Hybrid iPad 11 10 Case with Clear Back, Supports Auto Wake/Sleep -Navy"
                price={9.99}
                image={IpadCase}
                rating={5}
            />
        </div>
        <div className="home__row">
            <Product 
                title="Sparkling Ice, Black Raspberry Sparkling Water, Zero Sugar Flavored Water, with Vitamins and Antioxidants, Low Calorie Beverage, 17 fl oz Bottles (Pack of 12)"
                price={10.43}
                image={Ice}
                rating={4}
            />
            <Product 
                title="Nespresso Capsules Vertuo, Variety Pack, Medium and Dark Roast Coffee, 30 Count Coffee Pods, Brews 7.8 oz."
                price={42}
                image={Coffee}
                rating={5}
            />
            <Product 
                title="JBL Go 4 - Ultra-Portable, Waterproof and Dustproof Bluetooth Speaker, Big Pro Sound with Punchy bass, 7-Hour Built-in Battery, Made in Part with Recycled Materials (Black)"
                price={45}
                image={JBL}
                rating={5}
            />
        </div>
        <div className="home__row">
            <Product 
                title="Premier Protein Shake, Chocolate, 30g Protein 1g Sugar 24 Vitamins Minerals Nutrients to Support Immune Health, 11.5 fl oz (Pack of 12)"
                price={23}
                image={Shake}
                rating={4}
            />
=
        </div>
      </div>
    </div>
  )
}

export default Home
