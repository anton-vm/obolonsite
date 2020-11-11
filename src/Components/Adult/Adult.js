import React, { useState } from "react";
import style from "./Adult.module.css";

const Adult = ({toggleAdultWindow}) => {
  const [goOut, setGoOut] = useState(false);

  const yesOrNo = (e) => {
    e.preventDefault();
    const answer = e.target.dataset.answer;
    if (answer === "yes") {
      toggleAdultWindow();
    } else {
      setGoOut(true);
    }
  };

  return (
    <div className={style.wrapperAdult}>
      <div><img src={require('../../img/elements/obolon-full.png')}/></div>
      

      {goOut === false &&
        <div className={style.questionBlock}>
          <div className={style.question}><p> Ця сторінка призначена лише для повнолітніх осіб. <br/>Чи маєте ви 18 років?</p></div>
        <div className={style.answers}>
          <button className={style.btn} data-answer={"yes"} onClick={yesOrNo}>Yes</button>
          <button className={style.btn}  data-answer={"no"} onClick={yesOrNo}>No</button>
        </div>
        </div>
      }

      {goOut === true &&
      <div className={style.answerNo}>Вибачайте, але ви не можете відвідати сторінку.</div>
      }
    </div>
  );
};

export default Adult;
