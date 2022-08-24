import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";

import { Header, Footer, Benefit,Logo ,OurTeam} from "../component";

import aboutstyle from "../styles/_aboutus.module.css";
import benefitstyle from "../styles/_benefit.module.css";


import ProcessJson from "../json/Process.json";
import OurJson from "../json/Missionvision.json";
import BenefitJson from "../json/Benefit.json";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const About = () => {
  const [processData] = useState(ProcessJson);
  const [ourData] = useState(OurJson);
  const [benefitData] = useState(BenefitJson);
  return (
    <>
      <Header />
      <div className={aboutstyle.AboutSection}>
        <Container>
          <div className={aboutstyle.AboutHero}>
            <Row>
              <Col
                xl={{ span: 6, order: 1 }}
                lg={{ span: 6, order: 1 }}
                md={{ span: 6, order: 1 }}
                sm={{ span: 12, order: 1 }}
                xs={{ span: 12, order: 1 }}
              >
                 <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true} > 
                <div className={aboutstyle.AboutContent}>
                  <label className={aboutstyle.AboutTitle}>About us</label>
                  <h1 className={aboutstyle.AboutHeading}>
                    Our designs solve problems
                  </h1>
                  <p className={aboutstyle.AboutDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                </AnimationOnScroll>
              </Col>
              <Col
                xl={{ span: 6, order: 1 }}
                lg={{ span: 6, order: 1 }}
                md={{ span: 6, order: 1 }}
                sm={{ span: 12, order: 1 }}
                xs={{ span: 12, order: 1 }}
              >
              <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
                <Image
                  src="/images/AboutImg.svg"
                  className={aboutstyle.AboutImg}
                />
                 </AnimationOnScroll>
              </Col>
            </Row>
          </div>
          {/* Who We Are Section Start  */}

          <div className={aboutstyle.WhoWeAre}>
            <Row className={aboutstyle.WhoRow}>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={aboutstyle.WhoContent}
              >
                <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
                <label className={aboutstyle.WhoTitle}>Who we are</label>
                <h3 className={aboutstyle.WhoHeading}>Goal focussed</h3>
                <p className={aboutstyle.WhoDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </AnimationOnScroll>
              </Col>
              <Col
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className={aboutstyle.WhoContent}
              >
               <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
                <label></label>
                <h3 className={aboutstyle.WhoHeading}>
                  Continuous improvement
                </h3>
                <p className={aboutstyle.WhoDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </AnimationOnScroll>
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}> 
                <Image src="/images/WhoImg.svg" className={aboutstyle.WhoImg} />
                </AnimationOnScroll>
              </Col>
            </Row>
          </div>
          {/* Who We Are Section end  */}

          {/* Process Section Start */}
          <div className={aboutstyle.ProcessSection}>
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
            <h2 className={aboutstyle.ProcessHeading}>The process we follow</h2>
            </AnimationOnScroll>
            <Row>
              {processData.map((item) => (
                <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}> 
                  <div className={aboutstyle.ProcessContent}>
                    <div className={aboutstyle.circle}></div>
                    <div className={aboutstyle.line}></div>
                    <h6 className={aboutstyle.CardHeading}>
                      {item.processHeading}
                    </h6>
                    <p className={aboutstyle.CardDescription}>
                      {item.processDescription}
                    </p>
                  </div>
                  </AnimationOnScroll>
                </Col>
              ))}
            </Row>
          </div>
          {/* Process Section End */}
        </Container>

        {/* Our Mission and Our Vision Section Start */}
        <div className={aboutstyle.MissionVision}>
          <Container>
            <Row>
              {ourData.map((i, k) => {
                if (k % 2 == 0) {
                  return (
                    <>
                      <Col
                        xl={7}
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        // className={aboutstyle.OurMission}
                      >
                        <div className={aboutstyle.OurMission}>
                        <label className={aboutstyle.MissionTitle}>
                          {i.ourTitle}
                        </label>
                        <h3 className={aboutstyle.MissionHeading}>
                          {i.ourHeading}
                        </h3>
                        <p className={aboutstyle.MissionParg}>
                          {i.ourDescription}
                        </p>
                        </div>
                      </Col>
                      <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                        <Image
                          src="/images/Mission.svg"
                          className={aboutstyle.MissionImg}
                        />
                      </Col>
                    </>
                  );
                } else if (k % 2 == 1) {
                  return (
                    <>
                      <div className={aboutstyle.LeftCont}>

                     
                      <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                        <Image
                          src="/images/Vision.svg"
                          className={aboutstyle.VisionImg}
                        />
                      </Col>
                      <Col
                        xl={7}
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                       
                        // className={aboutstyle.OurMission}
                      >
                        <div className={aboutstyle.OurMission1}>
                        <label className={aboutstyle.MissionTitle}>
                          {i.ourTitle}{" "}
                        </label>
                        <h3 className={aboutstyle.MissionHeading}>
                          {i.ourHeading}
                        </h3>
                        <p className={aboutstyle.MissionParg}>
                          {i.ourDescription}
                        </p>
                        </div>
                      </Col>
                      
                      </div>
                    </>
                  );
                }
              })}
            </Row>
          </Container>
        </div>
        {/* Our Mission and Our Vision Section End */}
        {/* Benefits Section Start */}
        <div className={benefitstyle.BenefitSection}>
        <Container>
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
        <h2 className={benefitstyle.BenefitHeading}>The benefits of working with us</h2>
        </AnimationOnScroll>
          <Row>
          {benefitData.map((item) => (
              <Benefit data={item} />
            ))}
          
            <Logo />
           
          </Row>
        </Container>
        </div>
        {/* Benefits Section End */}

        {/* Ourteam section start  */}
            <OurTeam />
        {/* Ourteam section end  */}

      </div>
      <Footer />
    </>
  );
};
export default About;
