import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ourstyle from "../styles/Ourwork.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { formatWithValidation } from "next/dist/shared/lib/utils";

export const OurWork = () => {
  return (
    <>
      <Col xl={8} lg={8} className={ourstyle.img_col}>
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
          <Image src="/images/card1.svg" className={ourstyle.card1_img} />
          <div className={ourstyle.text_overly}>
            <h4 className={ourstyle.our_heading}>
              Workhub office Webflow Webflow Design
            </h4>
            <p className={ourstyle.our_parg}>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>
            <button className={ourstyle.views_btn}>View project</button>
          </div>
        </AnimationOnScroll>
      </Col>
      <Col xl={4} lg={4} className={ourstyle.img_col}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <Image src="/images/card3.svg" className={ourstyle.card_imgs} />
          <div className={ourstyle.overly}>
            <h4 className={ourstyle.overly_heading}>Unisaas Website Design</h4>
            <button className={ourstyle.portfolio_btn}>View portfolio</button>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <Image src="/images/card2.svg" className={ourstyle.card_imgs3} />
          {/* <div className={ourstyle.overly2}>
              <h4 className={ourstyle.overly_heading}>Unisaas Website Design</h4>
              <button className={ourstyle.portfolio_btn}>View portfolio</button>
              </div> */}
        </AnimationOnScroll>
      </Col>
    </>
  );
};
