import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import style from "../styles/Wework.module.css";
import Workjson from "../json/Work.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const WeWork = () => {
  const [workdata] = useState(Workjson);

  return (
    <>
      <div className={style.wework_section}>
        <Container>
          <Row>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
              <div className={style.work_heading_main}>
                <h2 className={style.work_heading}>How we work</h2>
                <p className={style.we_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <button className={style.get_btn}>
                  Get in touch with us
                </button>
              </div>
              </AnimationOnScroll>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12} className="col_8">
             <Row> 
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className={style.card_content}>
                    <Image src="/images/point1.svg" />
                    <h5 className={style.cont_heding}>Strategy</h5>
                    <p className={style.cont_parg}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className={style.card_content}>
                    <Image src="/images/point1.svg" />
                    <h5 className={style.cont_heding}>Strategy</h5>
                    <p className={style.cont_parg}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className={style.card_content}>
                    <Image src="/images/point1.svg" />
                    <h5 className={style.cont_heding}>Strategy</h5>
                    <p className={style.cont_parg}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <div className={style.card_content}>
                    <Image src="/images/point1.svg" />
                    <h5 className={style.cont_heding}>Strategy</h5>
                    <p className={style.cont_parg}>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et
                      velit aliquam .
                    </p>
                  </div>
                </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

