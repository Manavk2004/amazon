import React from 'react'
import "../css/Home.css"
import Background from "../assets/amazon-background.jpg"
import Product from "./Product.jsx"
import Bracelet from "../assets/braceelt.png"
import IpadCase from "../assets/ipad.png"
import Coffee from "../assets/coffee.png"
import Ice from "../assets/ice.png"
import JBL from "../assets/jbl.png"
import Shake from "../assets/shake.png"
import Monitor from "../assets/monitor.png"

function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Background} />
        <div className="home__row">
            <Product
                id={Math.floor(Math.random() * 100) + 1} 
                title="Gold Bracelet for Women | 18K Gold Plated Stainless Steel Gold Bracelet | Lovely Gift for Women" 
                price={17.99} 
                image={Bracelet} 
                rating={4}
            />
            <Product
                id={Math.floor(Math.random() * 100) + 1} 
                title="ProCase for iPad (A16) 11th Generation 11 Inch 2025/10th Generation 10.9 Inch 2022 Case with Pencil Holder, Hybrid iPad 11 10 Case with Clear Back, Supports Auto Wake/Sleep -Navy"
                price={9.99}
                image={IpadCase}
                rating={5}
            />
        </div>
        <div className="home__row">
            <Product
                id={Math.floor(Math.random() * 100) + 1} 
                title="Sparkling Ice, Black Raspberry Sparkling Water, Zero Sugar Flavored Water, with Vitamins and Antioxidants, Low Calorie Beverage, 17 fl oz Bottles (Pack of 12)"
                price={10.43}
                image={Ice}
                rating={4}
            />
            <Product 
                id={Math.floor(Math.random() * 100) + 1} 
                title="Nespresso Capsules Vertuo, Variety Pack, Medium and Dark Roast Coffee, 30 Count Coffee Pods, Brews 7.8 oz."
                price={42}
                image={Coffee}
                rating={5}
            />
            <Product 
                id={Math.floor(Math.random() * 100) + 1} 
                title="JBL Go 4 - Ultra-Portable, Waterproof and Dustproof Bluetooth Speaker, Big Pro Sound with Punchy bass, 7-Hour Built-in Battery, Made in Part with Recycled Materials (Black)"
                price={44.95}
                image={JBL}
                rating={5}
            />
        </div>
        <div className="home__row">
            <Product
                id={Math.floor(Math.random() * 100) + 1} 
                title="Deco Gear 49 Curved Ultrawide Gaming Monitor | 32:9 | 3840x1080 | 144Hz | 3000:1 | E-LED | 2 HDMI | 2 Display Port"
                price={499.99}
                image={Monitor}
                rating={4}
            />
=
        </div>
      </div>
    </div>
  )
}

export default Home
