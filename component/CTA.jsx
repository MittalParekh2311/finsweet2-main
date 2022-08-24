import React from "react";
import { Container } from "react-bootstrap";
import ctastyle from "../styles/_cta.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const CTA = () => {
    return(
        <>
        <div className={ctastyle.CtaSection}>
        <Container>
        <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}> 
            <div className={ctastyle.HeadingBody}>
                <h2 className={ctastyle.CtaHeading}>Let's build something great together</h2>
                <p className={ctastyle.CtaParg}>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                <button className={ctastyle.ContactBtn}>Contact Us</button>
            </div>
            </AnimationOnScroll>
        </Container>
        </div>
        </>
    )
}