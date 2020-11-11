import React, {useState, useEffect} from 'react';
import style from "./Title.module.css"
import Menu from '../Menu/Menu'

const Titel = ({screenHeight}) => {

    const [menuTurner, setMenuTurner] = useState(true)
    const [size, setSize] = useState(0)
    

    useEffect(() => {
        fontSize ()
    }, [])

    const fontSize =() => {
        const x = document.documentElement.clientWidth;
        const standardX = 1170;
        const currentPercentX = x / standardX;
        const finalSize = 295 * currentPercentX;
        setSize(finalSize)
    }



    return (
        <div className={`${style.block} `} style={{height: screenHeight}} id={'top'}>
            <div className={style.bgdImage}>

                <div className={style.menu}>
                    {menuTurner && <Menu/>}
                    </div> 

                    <nav className={style.horisontMenu}>
                    <ul className={style.listMenu}>
                    <li className={style.itemMenu} data-id={'beer'}>Пиво</li>
                    <li className={style.itemMenu} data-id={"kvas"}>Квас</li>
                    <li className={style.itemMenu} data-id={"history"}>Історія</li>
                    <li className={style.itemMenu} data-id={"toBuy"}>Де купити</li>
                    <li><a href={'https://www.facebook.com/obolon.poland'}><img src={require('../../img/elements/facebook_icon.svg')} className={style.facebook}/></a></li>
                </ul>
                    </nav> 

                           
                <div className={style.logo}><img src={require('../../img/elements/obolon-full.png')} className={style.logoImg}/></div>
                <div className={style.horisontal}>
                <div className={style.logoVert}> <img src={require('../../img/elements/obolon-logo-vert.png')} className={style.logoVertImg}/></div>
                <h1 className={style.sloganHorisont}>Pierwsze piwo Ukrainy</h1> 
                </div>
                <h1 className={style.slogan}>Pierwsze piwo Ukrainy</h1> 
                <div className={style.beerBottle}><img src={require('../../img/elements/beer-bottle.png')}/></div>
                

            </div>
            
        </div>
    );
};

export default Titel;