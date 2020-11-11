import React, {useState} from 'react';
import style from './Header.module.css'
// import Burger from "../../Elements/Burger/Burger"




const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const opener = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <header className={`${style.wrapper} `} >
            <div className={`${style.headElement}`} data-id={"top"}><img src={require("../../img/elements/obolon-logo-vert-small.png")} data-id={"top"}/></div>
            <div className={style.headElement}>
            <div className={style.dropDown}>
                <div className={style.menuBtn} onClick={opener}>
                <div className={style.row}></div>
                <div className={style.row}></div>
                <div className={style.row}></div>                

                {/* <div>MENU</div> */}
                </div>
            
                {openMenu &&
                <div className={style.menu}>
                <ul className={style.listMenu}>
                    <li className={style.itemMenu} data-id={"top"} onClick={opener}>Догори</li>
                    <div className={style.itemLine}></div>
                    <li className={style.itemMenu} data-id={'beer'} onClick={opener}>Пиво</li>
                    <div className={style.itemLine}></div>
                    <li className={style.itemMenu} data-id={"kvas"} onClick={opener}>Квас</li>
                    <div className={style.itemLine}></div>
                    <li className={style.itemMenu} data-id={"history"} onClick={opener}>Історія</li>
                    <div className={style.itemLine}></div>
                    <li className={style.itemMenu} data-id={"toBuy"} onClick={opener}>Де купити</li>
                    <div className={style.itemLine}></div>
                    <li className={style.itemMenu}><a href={'https://www.facebook.com/obolon.poland'}><img src={require('../../img/elements/facebook_icon.svg')} className={style.facebook}/></a></li>
                </ul>
                </div>          
                }
                </div>

                <nav className={style.horisontMenu}>
                    <ul className={style.listMenuH}>
                    <li className={style.itemMenuH} data-id={"top"}>Догори</li>
                    <li className={style.itemMenuH} data-id={'beer'}>Пиво</li>
                    <li className={style.itemMenuH} data-id={"kvas"}>Квас</li>
                    <li className={style.itemMenuH} data-id={"history"}>Історія</li>
                    <li className={style.itemMenuH} data-id={"toBuy"}>Де купити</li>
                    </ul>
                </nav>

            
            </div>
           
        </header> 
    );
};
 
export default Header;