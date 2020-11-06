import React from 'react';
import style from "./Hike.module.css"

const Hike = () => {
    return (
        <>
            <div className={style.productBlock}>
 
                <div className={style.orange}></div>
                <div className={style.blue}></div>

                <div className={`${style.logoHike} wow zoomIn`}><img src={require('../../img/elements/hike-logo.png')} className={style.logoImg}></img></div>
                <div className={`${style.logoHikePC} wow zoomIn`}><img src={require('../../img/elements/hike-logo.png')} className={style.logoImg}></img></div>

                <div className={style.groupProducts}>
               
                    <div className={style.bottlesHike}>
                    <div className={"bottles"}>
                        <div className={'bottle wow slideInLeft'}><img src={require('../../img/bottles/beer-hike.png')} data-name="hike_premium"></img></div>
                        <div className={'bottle wow slideInLeft'}><img src={require('../../img/bottles/beer-hike_can.png')} data-name="hike_premium_can"></img></div>
                    </div>
                    </div>
                    <div className={`${style.logo} wow zoomIn`}>
                        <div ><img src={require('../../img/elements/hike-logo.png')}></img></div>
                    </div>  
                    <div className={style.bottlesHike}>
                    <div className={"bottles"}>
                        <div className={'bottle wow slideInRight'}><img src={require('../../img/bottles/beer_hike_blue_can.png')} data-name="hike_blance_can"></img></div>
                        <div className={'bottle wow slideInRight'}><img src={require('../../img/bottles/beer_hike_blue.png')} data-name="hike_blanche"></img></div>
                    </div>
                    
                    </div>
                    
                    </div>  

                    <div className={style.slogan}>DREAM IT <br/> DO IT <br/> HIKE IT</div>

                    
            </div>

            
        </>
        


    );
};

export default Hike;