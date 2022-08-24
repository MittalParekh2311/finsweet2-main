import React, { useState } from "react";
import { Container, Row, Col, NavLink, Nav, Image } from "react-bootstrap";
import style from "../styles/Footer.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Popup from "./Popup";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={style.footer_section}>
        <Container>
          {/* <h1>Footer</h1> */}
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <img src="/images/logo.svg" />
                <p className={style.footer_parg}>
                  We are always open to discuss your project and improve your
                  online presence.
                </p>
              </AnimationOnScroll>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce={true}>
                <h2 className={style.talk_heading}>Lets Talk!</h2>
                <p className={style.talk_parg}>
                  We are always open to discuss your project, improve your
                  online presence and help with your UX/UI design challenges.
                </p>
                <div className={style.social_icon}>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={style.footer_link}
                  >
                    <img src="/images/facebook.svg" />
                  </NavLink>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={style.footer_link}
                  >
                    <img src="/images/twitter.svg" />
                  </NavLink>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={style.footer_link}
                  >
                    <img src="/images/insta.svg" />
                  </NavLink>
                  <NavLink
                    xl={3}
                    lg={3}
                    md={3}
                    sm={3}
                    className={style.footer_link}
                  >
                    <img src="/images/linked.svg" />
                  </NavLink>
                </div>
              </AnimationOnScroll>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
                <div className={style.contact_info}>
                  <div className={style.email_id}>
                    <label className={style.info_email}>
                      Email me at
                    </label>
                    <span className={style.emailaddress}>
                      contact@website.com
                    </span>
                  </div>
                  <div className={style.contact}>
                    <label className={style.call}>Call us</label>
                    <span className={style.contact_number}>
                      0927 6277 28525
                    </span>
                  </div>
                </div>
              </AnimationOnScroll>
            </Col>
          </Row>
          <Image
            src="/images/message.png"
            className="messageicon"
            onClick={togglePopup}
          />
          {isOpen && (
            <Popup  
              content={
                <>
                  <h1>Hello</h1>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </Container>
      </div>
      <div className={style.footer_bottom}>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <p className={style.copyright}>
                Copyright 2022, Finsweet.com
              </p>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className={style.footer_link}>
                <Nav.Link href="Home" className={style.footer_navlink}>
                  Home
                </Nav.Link>
                <Nav.Link href="Aboutus" className={style.footer_navlink}>
                  About Us
                </Nav.Link>
                <Nav.Link href="" className={style.footer_navlink}>
                  Features
                </Nav.Link>
                <Nav.Link href="" className={style.footer_navlink}>
                  Pricing
                </Nav.Link>
                <Nav.Link href="" className={style.footer_navlink}>
                  FAQ
                </Nav.Link>
                <Nav.Link href="" className={style.footer_navlink}>
                  Blog
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
