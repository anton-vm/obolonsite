import React from 'react';
import style from "./Hike.module.css"

const Hike = () => {
    return (
        <>
                {/* <div className={style.productBlock}>
                  <div className={style.orange}> <div/>
                  <div className={style.blue}></div> 
                   
                   
                   <div className={style.groupProducts}>
                    <div className={"bottles"}>
                        <div className={'bottle'}><img src={require('../../img/bottles/beer-hike.png')}></img></div>
                        <div className={'bottle'}><img src={require('../../img/bottles/beer-hike_can.png')}></img></div>
                    </div>
                    <div className={"bottles"}>
                        <div className={'bottle'}><img src={require('../../img/elements/hike-logo.png')}></img></div>
                    </div>  
                    <div className={"bottles"}>
                        <div className={'bottle'}><img src={require('../../img/bottles/beer_hike_blue_can.png')}></img></div>
                        <div className={'bottle'}><img src={require('../../img/bottles/beer_hike_blue.png')}></img></div>
                    </div>
                    </div>      
                                    
                </div>     

                
            </div> */}


            <div className={style.productBlock}>

                <div className={style.orange}></div>
                <div className={style.blue}></div>

                <div className={style.groupProducts}>
                    <div className={"bottles"}>
                        <div className={'bottle wow animate__bounceInLeft'}><img src={require('../../img/bottles/beer-hike.png')}></img></div>
                        <div className={'bottle wow animate__bounceInRight'}><img src={require('../../img/bottles/beer-hike_can.png')}></img></div>
                    </div>
                    <div className={"wow zoomIn"}>
                        <div ><img src={require('../../img/elements/hike-logo.png')}></img></div>
                    </div>  
                    <div className={"bottles"}>
                        <div className={'bottle wow animate__bounceInLeft'}><img src={require('../../img/bottles/beer_hike_blue_can.png')}></img></div>
                        <div className={'bottle wow animate__bounceInRight'}><img src={require('../../img/bottles/beer_hike_blue.png')}></img></div>
                    </div>
                    </div> 
            </div>

            
        </>
        


    );
};

export default Hike;