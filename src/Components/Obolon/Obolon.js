import React from 'react';
import style from "./Obolon.module.css"

const Obolon = () => {
    return (
        <div className={style.wrapper}>
            <div className={"bottles wow zoomIn"}>
                <div className={"bottle"}>
                    <img src={require("../../img/bottles/beer_obolon_premium.png")} className={style.img}></img>
                    <div className={"naming"}>Premium</div>
                </div>
                <div className={"bottle"}>
                    <img src={require("../../img/bottles/beer_magnat.png")} className={style.img}></img>
                    <div className={"naming"}>Magnat</div></div>
                <div className={"bottle"}>
                    <img src={require("../../img/bottles/beer_obolon_svitle.png")} className={style.img}></img>
                    <div className={"naming"}>Svitle</div>
                    </div>
            </div>
            <div className={`${style.description} wow zoomIn`}>
                <div className={style.logo}><img src={require('../../img/elements/logo_white.png')}></img></div>
                <div><p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p></div>
            </div>
            <div className={"bottles wow zoomIn"}>
                <div className={"bottle"}><img src={require("../../img/bottles/beer_obolon_premium.png")} className={style.img}></img></div>
                <div className={"bottle"}><img src={require("../../img/bottles/beer_magnat.png")} className={style.img}></img></div>
                <div className={"bottle"}><img src={require("../../img/bottles/beer_obolon_svitle.png")} className={style.img}></img></div>
            </div>
            
        </div>
    );
};

export default Obolon;