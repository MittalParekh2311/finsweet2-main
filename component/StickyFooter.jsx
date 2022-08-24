import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import stickystyle from "../styles/Sticky.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
// import { motion } from "framer-motion"

export const StickyFooter = () => {   
  let oldScrollY = 0;
  const [direction, setDirection] = useState(true);
  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection(false);      
      console.log("down");
    } else {
      setDirection(false);
      console.log("up");
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
    
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDirection(true);     
    }, 500);
  }, [direction]);

  return (
    <>
      <div>
        {direction  &&  (
          <div  className={stickystyle.stickybottom} style={{ bottom: "0px" }}>
            {/* <AnimationOnScroll animateIn="animate__fadeOut"> */}
              <Container>
                <Row>
                  <div className={stickystyle.stickyfooter}>
                    <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                      <Image src="/images/home-f.svg" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                      <Image src="/images/home-f.svg" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                      <Image src="/images/home-f.svg" />
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                      <Image src="/images/home-f.svg" />
                    </Col>
                  </div>
                </Row>
              </Container>
            {/* </AnimationOnScroll> */}
          </div>
        )}
      </div>
    </>
  );
};
