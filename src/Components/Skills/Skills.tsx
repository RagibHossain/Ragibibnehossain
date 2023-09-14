import React, { useContext } from 'react'
import MyImage from '../MyImage/MyImage'
import skills from "../../Image/skills.png"
import "./Skills.css"
import Skill from './Skill'
import { MainstoreContext } from '../../Stores/mainStore'
import Header from '../Header/Header'
const Skills = () => {
    const darkMode = {
        backgroundColor: "#222222",
            marginLeft: "12%",
            paddingLeft: "7% ",
            paddingTop: "5% ",
            paddingBottom: "5% ",
            height: "500px",
            width: "50%",
            borderRadius: "8%",
            display: "flex",
            transition:"0.5s"
        }
        const lightMode = {
            backgroundColor: "#e2e2e2",
            marginLeft: "12%",
            paddingLeft: "7% ",
            paddingTop: "5% ",
            paddingBottom: "5% ",
            height: "500px",
            width: "50%",
            borderRadius: "8%",
            display: "flex",
            transition:"0.5s"
        }
        const store = useContext(MainstoreContext);
        const {lightMode : light,setMode} = store;
    return (
        <div className="skills-parent">
            <div style={{marginLeft : "20px"}}>
            <Header content="Skills" />
            </div>
           
            <div className="skills">
                   <span>
                   <MyImage height="250px" width="250px" url1={skills} />
                   </span>
               
                    <div style={light ? lightMode : darkMode}>
                        <div className="skill-box1">
                        <Skill percentage="80" color="#61DBFB" skill="React" />
                        <Skill percentage="90" color="#592C8C" skill="Asp.net Core" />
                        <Skill percentage="90" color="#90C53F" skill="Node.Js" />
                        <Skill percentage="90" color="#E8671C" skill="MobX" />
                        <Skill percentage="90" color="#6A4097" skill="EF-Core" />
                        </div>
                        <div className="skill-box2">
                        <Skill percentage="80" color="#EFD81D" skill="Javascript" />
                        <Skill percentage="90" color="#9C75D5" skill="C#" />
                        <Skill percentage="75" color="#3178C6" skill="Typescript" />                        
                        <Skill percentage="90" color="#DD4B25" skill="HTML" />
                        <Skill percentage="80" color="#0B79BA" skill="CSS" />
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Skills
