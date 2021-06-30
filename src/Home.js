import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";

export const Home = () => {
  const [product] = useState([
    {
      id: 333,
      title: "The lense startup :How to control the innnovation",
      price: 11.38,
      rating: 5,
      image: "https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg",
    },
    {
      id: 111,
      title: "The lense startup :How to control the innnovation",
      price: 14.38,
      rating: 5,
      image:
        "https://ae01.alicdn.com/kf/HTB1Ptm0anTI8KJjSsphq6AFppXaR/Tempered-Glass-Protective-Film-Clear-Guard-For-Fossil-Q-Founder-Gen-1-2-Generation-Watch-Smartwatch.jpg",
    },
    {
      id: 111,
      title: "The lense startup :How to control the innnovation",
      price: 14.38,
      rating: 5,
      image:
        "https://ae01.alicdn.com/kf/HTB1Ptm0anTI8KJjSsphq6AFppXaR/Tempered-Glass-Protective-Film-Clear-Guard-For-Fossil-Q-Founder-Gen-1-2-Generation-Watch-Smartwatch.jpg",
    },
    {
      id: 111,
      title: "The lense startup :How to control the innnovation",
      price: 14.38,
      rating: 5,
      image:
        "https://ae01.alicdn.com/kf/HTB1Ptm0anTI8KJjSsphq6AFppXaR/Tempered-Glass-Protective-Film-Clear-Guard-For-Fossil-Q-Founder-Gen-1-2-Generation-Watch-Smartwatch.jpg",
    },
    {
      id: 111,
      title: "The lense startup :How to control the innnovation",
      price: 14.38,
      rating: 5,
      image:
        "https://ae01.alicdn.com/kf/HTB1Ptm0anTI8KJjSsphq6AFppXaR/Tempered-Glass-Protective-Film-Clear-Guard-For-Fossil-Q-Founder-Gen-1-2-Generation-Watch-Smartwatch.jpg",
    },
    {
      id: 111,
      title: "The lense startup :How to control the innnovation",
      price: 14.38,
      rating: 5,
      image:
        "https://ae01.alicdn.com/kf/HTB1Ptm0anTI8KJjSsphq6AFppXaR/Tempered-Glass-Protective-Film-Clear-Guard-For-Fossil-Q-Founder-Gen-1-2-Generation-Watch-Smartwatch.jpg",
    },
    {
      id: 55555,
      title: "The lense startup :How to control the innnovation",
      price: 15.38,
      rating: 5,
      image: "https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg",
    },
  ]);
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* product id,title, price,rating,image */}
      {/* <div className="home__row">
        {product.map((value) => (
          <Product
            id={value.id}
            title={value.title}
            price={value.price}
            rating={value.rating}
            image={value.image}
          />
        ))}
      </div> */}
      <div className="home__row">
        <Product
          id={"1"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
        />
        <Product
          id={"1"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144763"
        />
      </div>

      <div className="home__row">
        <Product
          id={"2"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://ae01.alicdn.com/kf/HTB1Ptm0anTI8KJjSsphq6AFppXaR/Tempered-Glass-Protective-Film-Clear-Guard-For-Fossil-Q-Founder-Gen-1-2-Generation-Watch-Smartwatch.jpg"
        />
        <Product
          id={"3"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://www.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa53dcc88/JBL_LIVE300TWS_ProductImage_Black_CasewithProduct.jpg?sw=299&sh=299&sm=fit&sfrm=png"
        />
        <Product
          id={"4"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFQZ-EOY62l5DmglYWn8r2j2XpZIXIDXLHRA&usqp=CAU"
        />
      </div>

      <div className="home__row">
        <Product
          id={"5"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
        <Product
          id={"4"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://www.edwardshaw.co.uk/wp-content/uploads/2012/03/garment-product-photograph-13953r.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={"2"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550162485-51zKzMIwVDL.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
        />
        <Product
          id={"3"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://i.insider.com/5cf52a6e11e20507a53404b7?width=1080&format=jpeg"
        />
        <Product
          id={"4"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={"2"}
          title="The lense startup :How to control the innnovation"
          price={11.38}
          rating={5}
          image="https://www.lg.com/us/images/tvs/md06065217/gallery/OLED65C9PUA_1100_v2.jpg"
        />
      </div>
    </div>
  );
};
