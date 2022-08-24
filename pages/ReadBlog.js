import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogBanner, Footer, Header } from "../component";

import readstyle from "../styles/_readblog.module.css";
import { Container,Image } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const ReadBlog = () => {
  return (
    <>
      <Header />
      <div className={readstyle.ReadBlogSection}>
        <Container>
          <BlogBanner />
          <div className={readstyle.BlogContent}>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
            <h3 className={readstyle.ReadHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <p className={readstyle.ReadParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
            <h3 className={readstyle.ReadHeading}>Ut enim ad minim veniam, quis nostrud.</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <p className={readstyle.ReadParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
          <p className={readstyle.ListContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          <p className={readstyle.ListContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          <p className={readstyle.ListContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
          <p className={readstyle.ReadParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </AnimationOnScroll>
            <Image src="/images/ReadBlogImg.svg" className={readstyle.ReadBlogImg} />
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}> 
            <h3 className={readstyle.ReadHeading}>Ut enim ad minim veniam, quis nostrud.</h3>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
            <p className={readstyle.ReadParg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </AnimationOnScroll>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};
export default ReadBlog;
