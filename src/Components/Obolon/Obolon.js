import React from 'react';
import style from "./Obolon.module.css"

const Obolon = () => {
    return (
        <div className={style.wrapper} id={"beer"}>
            <div className={style.obolonWrap}>
            <div className={`${style.descriptionHorisont} wow zoomIn`}>
                <div className={style.logo}><img src={require('../../img/elements/logo_white.png')}></img></div>
                <div><p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p></div>
            </div>


            <div className={style.beerGroupe}>
            <div className={style.bottleGroupe}>
            <div className={"bottles wow zoomIn"} >
                <div className={"bottle"} >
                    <img src={require("../../img/bottles/beer_obolon_premium.png")} className={style.img} data-name="obolon_premium"></img>
                                    </div >
                <div className={"bottle"} >
                    <img src={require("../../img/bottles/beer_magnat.png")} className={style.img} data-name="obolon_magnat"/>
                                       </div> 
                <div className={"bottle"}>
                    <img src={require("../../img/bottles/beer_obolon_svitle.png")} className={style.img} data-name="obolon_svitle"></img>
                                       </div>
            </div>
            </div>
            
            <div className={`${style.description} wow zoomIn`}>
                <div className={style.logo}><img src={require('../../img/elements/logo_white.png')}></img></div>
                <div><p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p></div>
            </div>
            <div className={style.bottleGroupe}>
            <div className={"bottles wow zoomIn"} >
                <div className={"bottle"}><img src={require("../../img/bottles/beer_obolon_wheat.png")} className={style.img} data-name="obolon_wheat"></img></div>
                <div className={"bottle"}><img src={require("../../img/bottles/beer_obolon_velvet.png")} className={style.img} data-name="obolon_velvet"></img></div>
                <div className={"bottle"}><img src={require("../../img/bottles/beer_obolon_white.png")} className={style.img} data-name="obolon_white"></img></div>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Obolon;