import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { MainstoreContext } from '../../Stores/mainStore'
import Header from '../Header/Header'
import "./experience.css"
import ExperienceStick from './ExperienceStick'
import ExpSection from './ExpSection'
const Experience = () => {

    const store = useContext(MainstoreContext);
    const { lightMode: light, setMode } = store;
    return (
        <div style={{ height: "900px" }}>
            <Header content="Experience" />
            <div style={{ display: "flex" }}>
                <div className={light ? "lightMode" : "darkMode"}>
                    <ExperienceStick left="31px" icon="graduation-cap" />
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px", position: "relative", bottom: "25px" }}>
                        <ExpSection starting="2016" ending="2021" degreeOrRole="B.Sc in Computer Science" institution="Independent University,Bangladesh"/>
                        <ExpSection starting="2014" ending="2016" degreeOrRole="H.S.C" institution="Uttara High School and College"/>
                        <ExpSection starting="2004" ending="2014" degreeOrRole="S.S.C" institution="Uttara High School and College"/>
                    </div>
                </div>
                <div className={light ? "lightMode" : "darkMode"}>
                    <ExperienceStick left="35px"  icon="briefcase" />
                    <div style={{ display: "flex", flexDirection: "column", margin: "20px", position: "relative", bottom: "25px" }}>
                        <ExpSection starting="November 2020" ending="July 2021" degreeOrRole="Full Stack Software Developer" institution="Aveneur Solutions"/>
                        <ExpSection starting="January 2020" ending="October 2020" degreeOrRole="Backend Developer" institution="Cerulean Creative Technologies"/>
                        <ExpSection starting="September 2017 " ending="April 2018" degreeOrRole="Teaching Assistant" institution="Independent University,Bangladesh"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
