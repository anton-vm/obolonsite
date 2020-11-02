import React from 'react';
import style from "./Title.module.css"

const Titel = () => {
    return (
        <div className={style.block}>
            <div className={style.bgdImage}>
            
                <div className={style.logo}><img src={require('../../img/elements/obolon-full.png')}/></div>
                <h1 className={style.slogan}>Pierwsze piwo Ukrainy</h1> 
                <div className={style.beerBottle}><img src={require('../../img/elements/beer-bottle.png')}/></div>
                

            </div>
            
        </div>
    );
};

export default Titel;