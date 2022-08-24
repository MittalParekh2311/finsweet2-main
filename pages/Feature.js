import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  Benefit,
  Faq,
  FeatureBanner,
  Footer,
  Header,
  Logo,
} from "../component";

import benefitstyle from "../styles/_benefit.module.css";
import style from "../styles/_feature.module.css";
import aboutstyle from "../styles/_aboutus.module.css";

import BenefitJson from "../json/Benefit.json";
import ClassJson from "../json/Class.json";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
const Feature = () => {
  const [benefitData] = useState(BenefitJson);
  const [classData] = useState(ClassJson);
  return (
    <>
      {/* <h1>Feature</h1> */}
      <Header />
      <FeatureBanner />
      <div className={benefitstyle.BenefitSection}>
        <Container>
          <Row>
            <Logo />
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
              <h2 className={style.MainHeading}>
                The benefits of working with our team
              </h2>
            </AnimationOnScroll>
            {benefitData.map((item) => (
              <Benefit data={item} />
            ))}
          </Row>
        </Container>
      </div>
      <div className="BestClass">
        {classData.map((i, k) => {
          if (k % 2 == 0) {
            return (
              <>
                <Container>
                  <Row>
                    <Col
                      xl={7}
                      lg={7}
                      md={7}
                      sm={12}
                      xs={12}
                      //className={style.MainCol}
                    >
                      <AnimationOnScroll
                        animateIn="animate__fadeInDown"
                        animateOnce={true}
                      >
                        <div className={aboutstyle.OurMission}>
                          <span className={style.FeatureTitle}>
                            {i.title}
                          </span>
                          <h3 className={style.FeatureHeading}>
                            {i.heading}
                          </h3>
                          <p className={style.FeatureParg}>
                            {i.description}
                          </p>
                        </div>
                      </AnimationOnScroll>
                    </Col>
                    <Col
                      xl={5}
                      lg={5}
                      md={5}
                      sm={12}
                      xs={12}
                      className={style.MainCol}
                    >
                      <AnimationOnScroll
                        animateIn="animate__fadeInDown"
                        animateOnce={true}
                      >
                        <Image
                          src={i.rightimg}
                          className={aboutstyle.MissionImg}
                        />
                      </AnimationOnScroll>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          } else if (k % 2 == 1) {
            return (
              <>
                <div
                  style={{
                    backgroundColor: i.id == 2 ? "#F4F6FC" : "#FCD9801A",
                  }}
                >
                  <Container>
                    <Row className={aboutstyle.LeftCont}>
                      <Col
                        xl={5}
                        lg={5}
                        md={5}
                        sm={12}
                        xs={12}
                        className={style.MainCol}
                      >
                        <AnimationOnScroll
                          animateIn="animate__fadeInUp"
                          animateOnce={true}
                        >
                          <Image
                            src={i.lefttimg}
                            className={aboutstyle.VisionImg}
                          />
                        </AnimationOnScroll>
                      </Col>
                      <Col
                        xl={7}
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        //className={style.MainCol}
                      >
                        <AnimationOnScroll
                          animateIn="animate__fadeInUp"
                          animateOnce={true}
                        >
                          <div className={style.Leftside}>
                            <span className={style.FeatureTitle}>
                              {i.title}
                            </span>
                            <h3 className={style.FeatureHeading}>
                              {i.heading}
                            </h3>
                            <p className={style.FeatureParg}>
                              {i.description}
                            </p>
                          </div>
                        </AnimationOnScroll>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </>
            );
          }
        })}

        {/* </Row> */}
        {/* </Container> */}
      </div>
      <Faq />
      <Footer />
    </>
  );
};
export default Feature;
