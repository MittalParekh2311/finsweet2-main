import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "../styles/ContactForm.module.css";

export const ContactForm = () => {
  return (
    <>
      <div className={style.contactform_section}>
        <Container>
          <Row className={style.contactrow}>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} >
            <Image src="/images/woman.png" className={style.contact_img}/>
              <div className={style.contact_title}>
                <h1 className={style.contact_heading}>
                  Building stellar websites for early startups
                </h1>
                <p className={style.cont_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className={style.contact_form}>
              <div className="cont_form">
                <h5 className={style.form_heading}>Send inquiry</h5>
                <p className={style.form_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="form_input">
                <input
                    type="text"
                    name="name"
                    className={style.forminput}
                    placeholder="Your Name"
                  />
                   <input
                    type="text"
                    name="name"
                    className={style.forminput}
                    placeholder="Email"
                  />
                   <input
                    type="text"
                    name="name"
                    className={style.forminput}
                    placeholder="Paste your Figma design URL"
                  />
                  <button className={style.get_btn}>Send an Inquiry</button>
                  <button className={style.btn_link}>Get in touch with us</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
