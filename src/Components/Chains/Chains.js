import React from 'react';
import style from "./Chains.module.css"

const Chains = () => {

    const logoList = [
        'img/retails/logo-makro.png',
        'img/retails/logo-piotripawel.png',
        'img/retails/logo-polo.png',
        'img/retails/logo-selgos.png',
        'img/retails/logo-spolem.png',
        'img/retails/logo-stokrotka.png',
        'img/retails/logo-tesco.png',
        'img/retails/logo-aldi.png',
        'img/retails/logo-auchan.png',
        'img/retails/logo-carefour.png',
        'img/retails/logo-eurocash.png',
        'img/retails/logo-intermarche.png',
        'img/retails/logo-kaufland.png',
        'img/retails/logo-lectec.png',
    ]



    return (
        <div className={style.wrapChain} id={'toBuy'}>
            <div className={style.title}><h2>Торгові мережі</h2></div>
            <div className={style.logoBlock}>
                
                    {logoList.map((el) => <div className={`${style.logo} wow zoomIn`} key={el}><img src={require(`../../${el}`)} key={el} className={style.logoImg}/> </div>)}

                
            </div>
            
        </div>
    );
};

export default Chains; 