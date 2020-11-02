import React from 'react';
import style from "./Zibert.module.css"

const Zibert = () => {
    return (
        <div className={style.wrapperZibert}>
            <div className={`${style.productBlock} wow zoomIn`}>
                <div className={style.logo}><img src={require('../../img/elements/Zhyguli-logo.png')} className={style.logoImg}/></div>
                <div className={"bottles"}>
                <div className={"bottle"}><img src={require('../../img/bottles/beer_zhygulivske.png')} className={style.img} data-name="zhygulivske"/></div>
                </div>
                <div className={`${style.text} wow zoomIn`}><p>Жигулівське є відомим брендом світлого пива, і сягає своєю історією в середину 20-го сторіччя. Це є найбільш розповсюджена марка на пострадянському просторі.</p></div>
            </div>
            <div className={`${style.productBlock} wow zoomIn`}>
                <div className={style.logo}><img src={require('../../img/elements/zibert-logo.png')} className={style.logoImg}/></div>
                <div className={`bottles ${style.can}`}>
                <div className={"bottle"}><img src={require('../../img/bottles/beer_zibert.png')} className={style.img} data-name="zibert_svitle"/></div>
                <div className={"bottle"}><img src={require('../../img/bottles/beer_zibert_can.png')} className={style.img} data-name="zibert_svitle_can"/></div>
                </div>
                <div className={`${style.text} wow zoomIn`}><p>Zibbert - шляхетне пиво, що виробляється із1906 року на фабриці, заснованій німецьким пивоваром ...Зібертом. З тих часів в Україні назавжди вкорінилися традиції європейського виробництва хмільного напою.</p></div>
            </div>
            
            
        </div>
    );
};

export default Zibert;