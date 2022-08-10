import React from "react";
import "../Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>

        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_Y400.jpg"
            price={152}
          />
          <Product
            title='boAt Wave Lite Smartwatch with 1.69" HD Display, Sleek Metal Body, HR & SpO2 Level Monitor, 140+ Watch Faces, Activity Tracker, Multiple Sports Modes, IP68 & 7 Days Battery Life(Active Black)'
            rating={3}
            image="https://m.media-amazon.com/images/I/41qAgAkiXjL._AC_SY200_.jpg"
            price={1599}
          />
        </div>

        <div className="home__row">
          <Product
            title="ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, 4GB NVIDIA GeForce GTX 1650, Gaming Laptop (8GB/512GB SSD/Windows 11/Office H&S/Black/2.3 Kg), FX506LHB-HN355WS"
            rating={4}
            price={56990}
            image="https://m.media-amazon.com/images/I/710NRdecQtL._SL1000_.jpg"
          />
          <Product
            title="JBL Charge 4, Wireless Portable Bluetooth Speaker, JBL Signature Sound with Powerful Bass Radiator, 7500mAh Built-in Powerbank, JBL Connect+, IPX7 Waterproof, AUX & Type C (Without Mic, Blue)"
            price={9998}
            rating={5}
            image="https://m.media-amazon.com/images/I/81c9MVhhtdS._SL1500_.jpg"
          />
          <Product
            title="Casio Analog-Digital Black Dial Men's Watch-GA-2100-2ADR"
            price={6636}
            rating={4}
            image="https://m.media-amazon.com/images/I/61GVxvP5MjL._UL1100_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
            price={3749}
            rating={4}
            image="https://m.media-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
