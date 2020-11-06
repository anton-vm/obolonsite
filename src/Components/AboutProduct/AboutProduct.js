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
          <h2 className={style.titleText}>{productInfo.name_polish}</h2>
        </div>

        <div className={`${style.picture} wow zoomIn`}>
          <img
            src={require(`../../${productInfo.picture_path}`)}
            className={"zoomIn"}
            alt={productInfo.site_name}
          />
        </div>

        <div className={style.infoBlock}>
          <div className={style.titleNameHorisont}>
            <h2 className={style.titleText}>{productInfo.name_polish}</h2>
          </div>

          <div className={style.beerInfo}>
            {productInfo.abv && (
              <div className={style.characteristics}>
                <div className={style.beerConsist}>
                  <div className={style.beerConsist_data}>
                    {productInfo.abv} %
                  </div>
                  <div className={style.beerConsist_tittle}>Алкоголь</div>
                </div>

                <div className={style.beerConsist}>
                  <div className={style.beerConsist_data}>
                    {productInfo.plato} %
                  </div>
                  <div className={style.beerConsist_tittle}>Сухі речовини</div>
                </div>
              </div>
            )}

            <div className={style.description}>{productInfo.description}</div>

            <div className={style.close} onClick={toggleProductWindow}>
              Закрити
            </div>
          </div>
        </div>
        </div>

    </>
  );
};

export default AboutProduct;
