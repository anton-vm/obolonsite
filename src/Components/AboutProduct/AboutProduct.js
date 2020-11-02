import React from "react";
import style from "./AboutProduct.module.css";
import array from "../../db/polishProducts.json";

const AboutProduct = ({ toggleProductWindow, product }) => {
  const productInfo = array.find((el) => el.site_name === product);
  console.log(productInfo);

  return (
    <>
      <div className={style.window}>
        <div className={style.titleName}>
          <h2 >{productInfo.name_polish}</h2>
        </div>
        <div className={style.picture}>
          <img
            src={require(`../../${productInfo.picture_path}`)}
            className={"zoomIn"}
            alt={productInfo.site_name}
          />
        </div>
        <div className={style.beerInfo}>
        <div className={style.characteristics}>
        <div className={style.beerConsist}> 
        <div className={style.beerConsist_data}>{productInfo.abv} %</div>
            <div className={style.beerConsist_tittle}>Вміст алкоголю:</div> 
        </div>

        <div className={style.beerConsist}> 
        <div className={style.beerConsist_data}>{productInfo.plato} %</div>
            <div className={style.beerConsist_tittle}>Вміст сухих речовин:</div> 
        </div>

        </div>

        <div className={style.description}>{productInfo.description}</div>
        </div>

        <div
          className={style.close}
          onClick={toggleProductWindow}
        >
        Закрити
        </div>

      </div>

    </>
  );
};

export default AboutProduct;
