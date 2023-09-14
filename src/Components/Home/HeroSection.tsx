import React, { useEffect, useState } from 'react';
import myColorFulImage from "../../Image/RagibProfessional.jpg";
import myBWImage from "../../Image/RagibBW.jpg";
import MyButton from '../Buttons/myButton';
import SocialMedia from './SocialMedia';
import MyImage from '../MyImage/MyImage';



const HeroSection = () => {
    return (
        <div>
            <div className="hero-section active animate__animated animate__bounceInRight" >
                <div className="my-image animate__animated animate__backInRight ">
                    <MyImage url1={myBWImage} url2={myColorFulImage} height="250px" width="250px"/>
                </div>
                <div className="intro hero-child">
                    <p>Assalamu Alaikum, I am Ragib Ibne Hossain</p>
                    <div>
                            <div className="typical">
                                <p style={{ paddingRight: "5px" }}> I am a Full Stack Software Engineer</p>
                            </div>
                    </div>
                </div>
                <div className="social-media">
                   <SocialMedia />
                </div>
                <div className="hire-me-button ">
                    <MyButton content="Hire Me" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection
