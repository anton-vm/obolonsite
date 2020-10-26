import React from 'react';
import style from "./Range.module.css"

const Range = () => {
    return (
        <div className={style.wrapper}>
            <h2 className={`${style.header} wow zoomIn`}>Справжнє Українське пиво</h2>
            <img src={require("../../img/bottles/beer_range.png")} className={`${style.img} wow zoomIn`}></img>
            <div className={"wow zoomIn"}>
            <div className={style.textRange}><p>Пиво, створене українськими пивоварами для справжніх поціновувачів хмельного напою. Це є пиво, що ввібрадо у себе дух Карпат, Чорного моря, безкрайніх степів та несе в собі традиції українського народу. Саме тому пиво та напої «Оболонь» так смакують споживачам у більш ніж 60 країнах світу на всіх континентах. </p></div>
            <div className={style.underElement}></div>
            </div>

            
        </div>
    );
};

export default Range;