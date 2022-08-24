import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CTA, Footer, Header } from "../component";
import { Container, Image, Row, Col } from "react-bootstrap";
import style from "../styles/_casestudies.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const CaseStudies = () => {
  return (
    <>
      <Header />
      <div className={style.CaseStudies}>
        <Container>
          <div className={style.Development}>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
            <h6 className={style.CaseTitle}>Web design and development</h6>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
            <h2 className={style.CaseHeading}>
              Finsweet Design case studies
            </h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
            <p className={style.CaseParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            </AnimationOnScroll>
            <Image src="/images/WorkImg1.svg" className={style.CaseImg} />
            <Row>           
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className={style.Information}>
                <label className={style.Title}>Client</label>
                <h6 className={style.Heading}>facebook.com</h6>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className={style.Information}>
                <label className={style.Title}>Service</label>
                <h6 className={style.Heading}>Product Design</h6>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className={style.Information}>
                <label className={style.Title}>Deliverable</label>
                <h6 className={style.Heading}>
                  UI Screens, UX Flow & Prototype
                </h6>
              </Col>
            </Row>
          </div>

          <div className={style.ArticlePart}>
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
            <h3 className={style.ArticleHeading}>About the project</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}> 
            <p className={style.ArticleParag}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </AnimationOnScroll>
            <div className={style.ListContent}>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}> 
              <p className={style.List}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className={style.List}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <p className={style.List}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
              <p className={style.List}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </p>
              </AnimationOnScroll>
            </div>
            <Image src="/images/ArticleImg.svg" className={style.ArticleImage} />
            <div className={style.WeDoPart}>
            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
              <h3 className={style.ArticleHeading}>How we do it</h3>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}> 
              <p className={style.ArticleParag}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </AnimationOnScroll>
            <div className={style.ListContent}>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}> 
              <p className={style.List}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className={style.List}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
              <p className={style.List}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </p>
              <p className={style.List}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </p>
              </AnimationOnScroll>
            </div>
            </div>
            <div className={style.Keywords}>
            <Row>
                <Col xl={2} lg={3} md={3} sm={12} xs={12}>
                <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}> 
                    <h6 className={style.keywordsHeading}>Keywords</h6>
                    </AnimationOnScroll>
                </Col>
                <Col xl={10} lg={9} md={9} sm={12} xs={12}>
                <AnimationOnScroll animateIn="animate__bounce" animateOnce={true}> 
                   <label className={style.KeywordTitle}>Design </label>
                   <label  className={style.KeywordTitle}>UI/UX  </label>
                   <label  className={style.KeywordTitle}>Wireframing </label>
                   <label  className={style.KeywordTitle}>Branding </label>
                   <label  className={style.KeywordTitle}>Development </label>
                   <label  className={style.KeywordTitle}>webflow</label>
                   </AnimationOnScroll>
                </Col>
            </Row>

            </div>
          </div>
        </Container>
        <CTA />
      </div>
    
      <Footer />
    </>
  );
};
export default CaseStudies;
