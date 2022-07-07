import React, { useState, Component } from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

const QualityTextBlock = ({ blockText }) => {
  const [activeBlock, setActiveBlock] = useState("qualitySectionPrimary");

  return (
    <section className="services-area bg-right-shape ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="services-content it-service-content">
            <div className="content left-content" style={activeBlock == "qualitySectionPrimary" ? { display: "block" } : { display: " none" }}>
              <h2>{blockText.blockTitle}</h2>
              <p>{blockText.blockText}</p>
            </div>

            <div className="content left-content" style={activeBlock == "qualitySectionSecondary" ? { display: "block" } : { display: " none" }}>
              <h2>{blockText.firstBlockName}</h2>
              <p>{blockText.firstBlockText}</p>
            </div>

            <div className="content left-content" style={activeBlock == "qualitySectionThird" ? { display: "block" } : { display: " none" }}>
              <h2>{blockText.secondBlockName}</h2>
              <p>{blockText.secondBlockText}</p>
            </div>

            <div className="content left-content" style={activeBlock == "qualitySectionFourth" ? { display: "block" } : { display: " none" }}>
              <h2>{blockText.thirdBlockName}</h2>
              <p>{blockText.thirdBlockText}</p>
            </div>

            <div className="content left-content">
              <div className="row">
                <div className="col-sm-12">
                  <button
                    onClick={() => {
                      setActiveBlock("qualitySectionSecondary");
                    }}
                    className={activeBlock == "qualitySectionSecondary" ? "feature-box-active" : "feature-box"}
                  >
                    <i className="bx bxs-badge-check"></i>
                    {blockText.firstBlockName} - {blockText.firstBlockButtonText}
                  </button>
                </div>
                <div className="col-sm-12">
                  <button
                    onClick={() => {
                      setActiveBlock("qualitySectionThird");
                    }}
                    className={activeBlock == "qualitySectionThird" ? "feature-box-active" : "feature-box"}
                  >
                    <i className="bx bxs-badge-check"></i>
                    {blockText.secondBlockName} - {blockText.secondBlockButtonText}
                  </button>
                </div>
                <div className="col-sm-12">
                  <button
                    onClick={() => {
                      setActiveBlock("qualitySectionFourth");
                    }}
                    className={activeBlock == "qualitySectionFourth" ? "feature-box-active" : "feature-box"}
                  >
                    <i className="bx bxs-badge-check"></i>
                    {blockText.thirdBlockName} - {blockText.thirdBlockButtonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="services-image">
            <ScrollAnimation animateIn="fadeInRight" delay={50} animateOnce={true}>
              <div className="image">
                <img src="/images/services/service1.png" alt="image" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityTextBlock;
