import React from 'react';
import style from "./Kwas.module.css"

const Kwas = () => {
    return (
        <div>
            <div className={`${style.title} wow zoomIn`}>
            <div><img src={require('../../img/elements/obolon_logo_red.png')} className={style.imgLogo}></img></div>
                <h2 className={style.kwasTitle}>Kwas chelbowy</h2>
            </div>
            <div className={"bottles wow zoomIn"}>
                        <div className={'bottle'}><img src={require('../../img/bottles/kwas_podpiwek.png')} className={style.img}></img></div>
                        <div className={'bottle'}><img src={require('../../img/bottles/kwas_chlebowy.png')} className={style.img}></img></div>
            </div>

            <div className={`${style.text} wow zoomIn`}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p></div>

            <div className={"bottles wow zoomIn"}>
                        <div className={'bottle'}><img src={require('../../img/bottles/kwas_sliwa.png')} className={style.img}></img></div>
                        <div className={'bottle'}><img src={require('../../img/bottles/kwas_wisznia.png')} className={style.img}></img></div>
            </div>

            
        </div>
    );
};

export default Kwas;