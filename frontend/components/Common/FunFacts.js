import React, { Component, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useRouter } from "next/router";
import { useSpring, animated, config} from 'react-spring'


  


const FunFacts = () => {
  const router = useRouter();

  {
    return (
      <div className="funfacts-inner">
        <div className="row">
          <div className="col-lg-3 col-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={50}
              animateOnce={true}
            >
              <div className="single-funfacts funfact-style-two">
                <i className="bx bx-list-check"></i>
                <h3>2007</h3>
                <p>{router.locale == "lt" ? "Įkurta" : "Founded"}</p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={100}
              animateOnce={true}
            >
              <div className="single-funfacts funfact-style-two">
                <i className="bx bx-smile"></i>
                <h3>
                  <span className="sign-icon">~</span> 9000
                </h3>
                <p>{router.locale == "lt" ? "Užsakymų kasmet" : "Orders yearly"}</p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={150}
              animateOnce={true}
            >
              <div className="single-funfacts funfact-style-two">
                <i className="bx bx-grid-small"></i>
                <h3>
                  <span className="sign-icon">~</span> 99
                </h3>
                <p>{router.locale == "lt" ? "Skirtingų spaudos gaminių" : "Unique printing products"}</p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-3 col-6 col-sm-6">
            <ScrollAnimation
              animateIn="fadeInLeft"
              delay={200}
              animateOnce={true}
            >
              <div className="single-funfacts funfact-style-two">
                <i className="bx bxs-award"></i>
                <h3>
                  <span className="sign-icon">~</span> 2000
                </h3>
                <p>{router.locale == "lt" ? "Klientų Lietuvoje ir užsienyje" : "Clients"}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
};

export default FunFacts;
