import React, { useEffect, useState } from 'react'
import myColorFulImage from "../../Image/RagibColor.jpg"
import myBWImage from "../../Image/RagibBW.jpg"
import MyButton from '../Buttons/myButton';
import Typist from 'react-typist';
import SocialMedia from './SocialMedia';
import MyImage from '../MyImage/MyImage';



const HeroSection = () => {

    const [count, setCount] = useState(1);
    useEffect(() => {
        // document.title = `You clicked ${count} times`;
        setCount(1);
    }, [count]);
    return (
        <div>
            <div className="hero-section active animate__animated animate__bounceInRight" >
                <div className="my-image animate__animated animate__backInRight ">
                    {/* <img onMouseOver={() => setBlackAndWhite(false)} onMouseOut={() => setBlackAndWhite(true)} style={imgStyle} src={blackAndWhite ? myBWImage : myColorFulImage} /> */}
                    <MyImage url1={myBWImage} url2={myColorFulImage} height="250px" width="250px"/>
                </div>
                <div className="intro hero-child">
                    <p>Assalamu Alaikum, I am Ragib Ibne Hossain</p>
                    <div>
                        {count ? <Typist onTypingDone={() => setCount(0)}>
                            <div className="typical">
                                <p style={{ paddingRight: "5px" }}> I am a </p>
                                <p> Muslim </p>
                                <Typist.Backspace count={7} delay={500} />
                                <p>Software Developer</p>
                                <Typist.Backspace count={19} delay={500} />
                                <p> Tech Enthusiasist </p>
                                <Typist.Backspace count={18} delay={500} />
                                <p> Cricketer </p>
                                <Typist.Backspace count={10} delay={400} />
                                <p> Footballer </p>
                                <Typist.Backspace count={11} delay={500} />
                                <p> Son </p>
                                <Typist.Backspace count={4} delay={500} />
                                <p> Brother </p>
                                <Typist.Backspace count={8} delay={500} />
                            </div>

                        </Typist> : ""}
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
