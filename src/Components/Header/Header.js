import React from 'react';
import style from './Header.module.css'




const Header = () => {
    return (
        <header className={style.overlay}>
            <div className={style.headElement}><a><img src={require("../../img/elements/obolon-logo-vert-small.png")}/></a></div>
            <div className={style.headElement}>
                <div className={style.row}></div>
                <div className={style.row}></div>
                <div className={style.row}></div>
            </div>
           
        </header>
    );
};
 
export default Header;