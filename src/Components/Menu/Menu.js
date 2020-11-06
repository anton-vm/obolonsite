import React, {useState} from 'react';
import style from './Menu.module.css'

const Menu = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const opener = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div>
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
                </ul>
                </div>
                }
            </div>
            
        </div>
    );
};

export default Menu;