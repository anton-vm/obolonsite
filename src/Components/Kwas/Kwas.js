import React from "react";
import style from "./Kwas.module.css";

const Kwas = () => {
  return (
    <div id={"kvas"} className={style.kwasWrap} >
      <div className={style.textWrap}>
        <div className={`${style.title} wow zoomIn`}>
          <div>
            <img
              src={require("../../img/elements/obolon_logo_red.png")}
              className={style.imgLogo}
            ></img>
          </div>
          <h2 className={style.kwasTitle}>Kwas chlebowy</h2>
        </div>

        <div className={`${style.textPad} wow zoomIn`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{" "}
          </p>
        </div>
      </div>

      <div className={style.groupeKwas}>
        <div className={"bottles wow zoomIn"}>
          <div className={"bottle"}>
            <img
              src={require("../../img/bottles/kwas_podpiwek.png")}
              className={style.img}
              data-name="kwas_podpiwek"
            ></img>
          </div>
          <div className={"bottle"}>
            <img
              src={require("../../img/bottles/kwas_chlebowy.png")}
              className={style.img}
              data-name="kwas_chlebowy"
            ></img>
          </div>
        </div>

        <div className={`${style.text} wow zoomIn`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{" "}
          </p>
        </div>

        <div className={"bottles wow zoomIn"}>
          <div className={"bottle"}>
            <img
              src={require("../../img/bottles/kwas_sliwa.png")}
              className={style.img}
              data-name="kwas_chlebowy_sliwa"
            ></img>
          </div>
          <div className={"bottle"}>
            <img
              src={require("../../img/bottles/kwas_wisznia.png")}
              className={style.img}
              data-name="kwas_chlebowy_wisznia"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kwas;
