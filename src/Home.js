import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://e0.pxfuel.com/wallpapers/724/281/desktop-wallpaper-get-amazon-prime-video-for-windows-amazon.jpg"
          alt="reload"
        />
      </div>

      <div className="home__row ">
        <Product
          id="1"
          title="As a Man Thinketh Paperback  6 November 2017 by James Allen (Author) white best paper print"
          image="https://m.media-amazon.com/images/I/71FwbTsfgUL._AC_UY218_.jpg"
          price={599}
          rating={4}
        />

        <Product
          id="2"
          title="Kenwood Kitchen Machine, 1000 Watts, 4.3L Bowl, 5 Main Attachments, Silver - OWKHC29.W0SI, Large (111534)"
          image="https://m.media-amazon.com/images/I/81YcxwM4n8L._SX355_.jpg"
          rating={5}
          price={35000}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Samsung Galaxy Watch4 Bluetooth(4.0 cm, Black, Compatible with Android only)"
          image="https://m.media-amazon.com/images/I/5118PRH9jjL._SX355_.jpg"
          price={11990}
          rating={5}
        />

        <Product
          id="4"
          title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)"
          image="https://m.media-amazon.com/images/I/51Q9Mf2R0WL._SX425_.jpg"
          price={9999}
          rating={4}
        />

        <Product 
        id="5"
        title="Apple 2023 MacBook Air laptop with M2 chip: 38.91cm (15.3 inch) Liquid Retina display, 8GB RAM 512GB SSD storage, backlit keyboard, 1080p FaceTime HD camera,Touch ID. Works with iPhone/iPad; Starlight" price={149900}
        rating={4}
        image="https://m.media-amazon.com/images/I/81UFHe-hH5L._SX679_.jpg"
         />
      </div>

      <div className="home__row">
        <Product
          id="6"
         title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels" 
        image="https://img.global.news.samsung.com/global/wp-content/uploads/2021/07/Odyssey_Neo_G9_PR_main1.jpg"
        rating={4}
        price={44499}
         />
      </div>
    </div>
  );
}

export default Home;
