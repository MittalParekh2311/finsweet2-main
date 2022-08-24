import Link from "next/link";
import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import faqstyle from "../styles/Faq.module.css";
import Faqjson from "../json/Faq.json";
import Questions from "./Questions";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const Faq = () => {
  const [faqData] = useState(Faqjson);
  
  return (
    <>
      <div className={faqstyle.faq_section}>
        <Container>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
              <h3 className={faqstyle.faq_heading}>
                Frequently asked questions
              </h3>
              <button className={faqstyle.faq_link}>Contact us for more info </button>
              </AnimationOnScroll>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
            {faqData.map(item => <Questions number={item.number} question={item.question} answer={item.answer} />)}
            </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
