import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bannerstyle from "../styles/Banner.module.css";
import fbannerstyle from "../styles/_featurebanner.module.css";


export const FeatureBanner = () => {
    return(
        <>
        {/* <h1>Banner</h1> */}
        <div className={bannerstyle.banner_section}>
        <Container>
            <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }} 
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
            <div className={fbannerstyle.BannerText}>
            <h1 className={bannerstyle.banner_heading}>All the features you need</h1>
            <p className={bannerstyle.banner_parg}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className={bannerstyle.view_btn}>View Pricing</button>
            </div>
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
            <Image
                src="/images/FeatureImg.svg"
                className={bannerstyle.banner_img}
              />
            </Col>
            </Row>
        </Container>

        </div>
        </>
    )
}