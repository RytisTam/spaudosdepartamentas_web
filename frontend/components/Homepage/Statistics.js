import React, { Component } from 'react';
import Link from 'next/link';
import FunFacts from '../Common/FunFacts';
import Typography from "@mui/material/Typography";
import dynamic from 'next/dynamic';
import ScrollAnimation from 'react-animate-on-scroll';
import { useRouter } from "next/router";


const WhyChooseUs = () => {
    const router = useRouter();
    {
        return (
            <>
                

                 <section className="services-area p-12" style={{backgroundColor:"#FBFBFB"}}>
                    <div className="container">
                        <div className="section-title">
                        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                            <h2>{router.locale == "lt" ? "Mūsų skaičiai" : "Our numbers"}</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
                            <p>{router.locale == "lt" ? "keletas skaičių ir faktų apie mūsų įmonę" : "Couple of numbers and facts about our business"}</p>
                        </ScrollAnimation>
                        </div>
                        <FunFacts />
                    </div>

                    {/* Shape Images */}
                    <div className="shape-map1">
                        <img src="/images/map1.png" alt="image" />
                    </div>
                    <div className="shape7">
                        <img src="/images/shape/shape7.png" alt="image" />
                    </div>
                    <div className="shape8">
                        <img src="/images/shape/shape8.png" alt="image" />
                    </div>
                    <div className="shape9">
                        <img src="/images/shape/shape9.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUs;