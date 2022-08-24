import React,{useState} from "react";
import faqstyle from "../styles/Faq.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Questions = (props) => {
    const [isActive, setActive] = useState(false);
  const handleClick = (id) => {
    setActive(!isActive);
  };
    return(
        <>
      <div className={faqstyle.questionborder}>
          <div className={faqstyle.question} id={props.id}>
          <h6 className={faqstyle.number}>{props.number}</h6>
                <h6 className={faqstyle.faq_question} onClick={() => handleClick(props.id)}>{props.question}</h6>
                <button onClick={() => handleClick(props.id)} className="angle">
               
               {isActive ?(<span className={isActive ? "active" : ""}><img src="/images/close.png" /></span>):(<span className={isActive ? "active" : ""}><img src="/images/plus.png" /></span> )}
                </button>
              </div>              
              <div className={isActive ? "answer active" : "answer"}>                        
                {props.answer}       
              </div>
              </div>
        </>
    )

}
export default Questions;

