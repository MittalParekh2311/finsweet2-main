import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import fstyle from "../styles/Feature.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const Feature = (props) => {
    const {featureimg,featureheading,featuredescription} = props.data;
  return (
    <>
     
        <Col xl={4} lg={4} md={6} className={fstyle.main_content}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
          <div className={fstyle.feature_content }>
            <Image src={featureimg}  className={fstyle.imgicon}/>
            <h6 className={fstyle.cont_heading}>{featureheading}</h6>
            <p className={fstyle.cont_parag}>
             {featuredescription}
            </p>
          </div>
          </AnimationOnScroll>
        </Col>
    </>
  );
};

