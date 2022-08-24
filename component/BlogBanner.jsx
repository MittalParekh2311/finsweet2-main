import React from "react";
import { Image } from "react-bootstrap";
import blogstyle from "../styles/_blog.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const BlogBanner = () => {
    return(
        <>
         <AnimationOnScroll animateIn="animate__fadeInDown"  animateOnce={true}> 
         <h2 className={blogstyle.BlogHeading}>
            A UX Case Study on Creating a Studious Environment for Students
          </h2>
          <div className={blogstyle.DateAuthor}>
            <label className={blogstyle.Author}>Andrew Jonson</label>
            <label className={blogstyle.Author}>Posted on 27th January 2021</label>
          </div>
          </AnimationOnScroll>        
          <Image src="/images/BlogImg.svg" className={blogstyle.BlogImage} />         
        </>
    )
}