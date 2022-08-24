import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import teamstyle from "../styles/_ourteam.module.css";
import TeamJson from "../json/Team.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const OurTeam = () => {
  const [teamData] = useState(TeamJson);
  return (
    <>
      <div className={teamstyle.OurTeamSection}>
        <Container>
          <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
            <h2 className={teamstyle.TeamHeading}>Meet our team</h2>
          </AnimationOnScroll>
          <Row>
            {teamData.map((item) => (
              <Col
                xl={3}
                lg={3}
                md={6}
                sm={6}
                xs={12}
                className={teamstyle.MainCards}
              >
                <div className={teamstyle.TeamContent}>
                  <Image src={item.teamimg} className={teamstyle.TeamImg} />
                  <div className="ImgOverly"></div>
                  <div className={teamstyle.TeamSocial}>
                    <Image src={item.teamfb} className={teamstyle.Icons} />
                    <Image src={item.teamtwitter} className={teamstyle.Icons} />
                    <Image
                      src={item.teamlinkedin}
                      className={teamstyle.Icons}
                    />
                  </div>
                  <div className={teamstyle.HeadingCont}>
                    <h6 className={teamstyle.TeamContHeading}>
                      {item.teamheading}
                    </h6>
                    <span className={teamstyle.TeamTitle}>
                      {item.teamtitle}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
