import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_HFC_3._CB413130503_.jpg"
        alt="Banner loading...."
        srcset=""
      />
      {/* Product ID, TITLE, PRICE, RATING, IMAGE*/}
      <div className="home__row">
        <Product
          id="123456"
          title="Dell Inspiron 3505 15.6 FHD AG Display Laptop (Ryzen-3 3250U / 8GB / 256 SSD / Integrated Graphics / 1 Yr NBD / Win 10 + Office H&S/ Accent Black) D560392WIN9BE"
          price={400.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tJecS6jjL._SX355_.jpg"
        />{" "}
        <Product
          id="123456"
          title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Gray) (2020 model)"
          price={900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71hk35dbxoL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="Sunward Coat for Men,Winter Men Slim Stylish Trench Coat Double Breasted Long Jacket Coat"
          price={1100}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61SD8ClbwvL._SY450_.jpg"
        />
        <Product
          id="123456"
          title="Dell Inspiron 3505 15.6 FHD AG Display Laptop (Ryzen-3 3250U / 8GB / 256 SSD / Integrated Graphics / 1 Yr NBD / Win 10 + Office H&S/ Accent Black) D560392WIN9BE"
          price={400.9}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71tJecS6jjL._SX355_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="PAUSE Black Solid Round Neck Slim Fit Full Sleeve Men's Longline Shrug"
          price={250.9}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81k47PWrvaL._UX569_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
