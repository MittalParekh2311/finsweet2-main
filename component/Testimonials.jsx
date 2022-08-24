import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "../styles/Testimonials.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={style.testi_section}>
        <Container>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12} xs={12} className={style.mainheading}>
              <h3 className={style.heading}>What our clients say about us</h3>
              <p className={style.parg}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <Slider {...settings}>
              <div className="slider_content">
                <h5 className={style.h5_heading}>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h5>
                <div className="profile_img">
                  <Image
                    src="/images/girls.svg"
                    className={style.profileimg}
                  />
                  <div className={style.profile_heading}>
                    <label className={style.profile_name}>Jenny Wilson</label>
                    <label className={style.designation}>Vice President</label>
                  </div>
                </div>
                </div>
                <div className="slider_content">
                <h5 className={style.h5_heading}>
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h5>
                <div className="profile_img">
                  <Image
                    src="/images/girls.svg"
                    className={style.profileimg}
                  />
                  <div className={style.profile_heading}>
                    <label className={style.profile_name}>Jenny Wilson</label>
                    <label className={style.designation}>Vice President</label>
                  </div>
                </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
