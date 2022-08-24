import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logostyle from "../styles/_logo.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Logo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <Col xl={2} lg={2} md={12} sm={12} xs={12} className={logostyle.LogoUser}>
          <h3>100.000+</h3>
          <span>Finsweet Users</span>
        </Col>
        <Col xl={10} lg={10} md={10} sm={12} xs={12} >
        <Slider {...settings}>
          <div>
           <Image src="/images/Logo1.svg" className={logostyle.LogoImg } />
          </div>
          <div>
          <Image src="/images/Logo2.svg" className={logostyle.LogoImg } />
          </div>
          <div>
          <Image src="/images/Logo3.svg" className={logostyle.LogoImg } />
          </div>
          <div>
          <Image src="/images/Logo4.svg" className={logostyle.LogoImg } />
          </div>
          <div>
          <Image src="/images/Logo5.svg" className={logostyle.LogoImg } />
          </div>
          <div>
          <Image src="/images/Logo1.svg" className={logostyle.LogoImg } />
          </div>
        </Slider>
        </Col>
    </>
  );
};
