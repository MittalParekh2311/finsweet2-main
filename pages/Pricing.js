import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col ,Image } from "react-bootstrap";
import { Faq, Footer, Header } from "../component";

import style from "../styles/_pricing.module.css";

import PricingJson from "../json/Pricing.json";


const Pricing = () => {
  const [pricingData] = useState(PricingJson);

  return (
    <>
      <Header />
      <div className={style.PricingSection}>
        <div className={style.PricingHeading}>
          <h2 className={style.PricingTitle}>Our Pricing Plans</h2>
          <p className={style.PricingParg}>
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <Container>
          <Row>
            {pricingData.map((data ,k) => {
              return (
                <Col xl={4} lg={6} md={6} sm={12} xs={12}>
                  <div className={style.PricingCard} style={{backgroundColor:data.id == 2 ? "#1C1E53":""}}>
                    <h3 className={style.number} style={{color:k%2 == 0 ? "black":"white"}}>{data.pricingNumber}</h3>
                    <p className={style.CardTitle} style={{color:k%2 == 0 ? "black":"#FCD980"}}>{data.pricingDesign}</p>

                    <h6 className={style.CardHeading} style={{color:k%2 == 0 ? "black":"white"}}>
                      {data.pricingHeading}
                    </h6>
                    <p className={style.Cardparag} style={{color:k%2 == 0 ? "black":"white"}}>
                      {data.pricingDescription}
                    </p>
                    <div className={style.List}>
                      <ul>                      
                        {data.list.map((val,index)=>{
                            {/* console.log(data.id) */}                           
                            return(
                          <li className={style.ListLink} href="#" style={{color:data.id == 2  ? "white":"" || index >2 && data.id == 1 ? "gray":"",borderLeft:val.isActive === true ? "15px solid #97DAAD" :"15px solid gray"}}>                          
                          {/*  {color: data.id == 2  ? "white":"black"} */}
                          {/* {color:index >2 && data.id == 1 ? "gray":"black"} */}
                          {/* color: data.id == 2  ? "white":"" || index >2 && data.id == 1 ? "gray":"",borderColor:"blue"} */}
                            {val.item}                          
                          </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                            )
                        })}                       
                      </ul>
                    </div>  
                    <div className={style.GetButton}>
                      <button className={style.PricingBtn} style={{backgroundColor:k%2 == 0  ? "#282938":"#FCD980"}} >
                        {data.pricingButton}
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Faq />
      <Footer />
    </>
  );
};
export default Pricing;
