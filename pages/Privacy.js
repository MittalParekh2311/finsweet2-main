import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Header, Footer } from "../component";

import contactstyle from "../styles/_contact.module.css";
import readstyle from "../styles/_readblog.module.css";
import style from "../styles/_privacy.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Privacy = () => {
  return (
    <>
      <Header />
      <div className={contactstyle.ContactSection}>
        <Container>
          <div className="">
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
            <h2 className={contactstyle.ContactaTitle}>Privacy Policy</h2>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <p className={contactstyle.ContactParg}>
              When you’re ready to go beyond prototyping in Figma, Webflow’s
              ready to help you bring your{" "}
            </p>
            </AnimationOnScroll>
          </div>
          <div className={style.PrivacyTitle}>
          <AnimationOnScroll animateIn="animate__fadeInleft" animateOnce={true}>
            <h3 className={style.PrivacyHeading}>Lorem ipsum dolor.</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <p className={style.PrivacyParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. <span className={style.ColorBlue}>Excepteur sint occaecat</span> cupidatat non proident.
            </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <p className={style.PrivacyParg}>
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInleft" animateOnce={true}> 
            <h3 className={style.PrivacyHeading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <p className={style.PrivacyParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat <span className={style.ColorBlue}>cupidatat</span> non proident.
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <p className={readstyle.ListContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className={readstyle.ListContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className={readstyle.ListContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <p className={style.PrivacyParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
            </AnimationOnScroll>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Privacy;
