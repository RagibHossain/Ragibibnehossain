import React, { useContext } from 'react'
import MyImage from '../MyImage/MyImage'
import "./about.css"
import Ragib from "../../Image/Ragib.jpg"
import { MainstoreContext } from '../../Stores/mainStore'
import Header from '../Header/Header'
import MyButton from '../Buttons/myButton'
const About = () => {
    const darkMode = {
        backgroundColor: "#222222",
        marginLeft:"20%",
        padding:"10px",
        width: "60%",
        borderRadius: "15px",
        transition: "0.5s"
        }
        const lightMode = {
            backgroundColor: "#e2e2e2",
            marginLeft:"20%",
            padding:"10px",
            width: "60%",
            borderRadius: "15px",
            transition: "0.5s"
        }
        const store = useContext(MainstoreContext);
        const {lightMode : light,setMode} = store;
    return (
        <div className="about-me-parent">
          
                <Header content="About Me"/>
                <div className="about">
                    <div>
                      <MyImage height="200px" width="200px" url1={Ragib} />
                      <div style={{margin:"10%"}}>
                      <MyButton content="Download CV" />
                      </div>
                     
                    </div>
                   
                    <div>
                        <p style={light ? lightMode : darkMode}>Currently working as a Full Stack Software developer in a Software company named Aveneur Solutions.
                            Proficient in some demanding programming languages and frameworks of 2021 . Have the ability do critical thinking and come up with logistic solution to big problems real quick whether it is a real life problem or programming .
                            Also have the ability to work under pressure . A very quick learner. Have the mentality to take any kind of challenge .</p>
                    </div>
                </div>

         

        </div>
    )
}

export default About
