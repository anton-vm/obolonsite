import React from 'react';
import style from "./History.module.css"

const History = () => {
    return (
        <div className={style.wrapper} id={"history"}>
            <h2>Історія компанії</h2>

        <div className={style.block}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p></div>
        
        <div className={`${style.block} wow zoomIn`}><img src={require('../../img/elements/factory.png')}></img></div>

        <div className={style.block}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p></div>
        <div className={style.block}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p></div>

        </div>
    );
};

export default History;