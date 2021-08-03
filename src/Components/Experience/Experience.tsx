import React, { useContext } from 'react'
import { MainstoreContext } from '../../Stores/mainStore'
import Header from '../Header/Header'
import "./experience.css"
const Experience = () => {
  
        const store = useContext(MainstoreContext);
        const {lightMode : light,setMode} = store;
    return (
        <div style={{height:"800px"}}>
            <Header content="Experience"/>
            <div style={{display:"flex"}}>
                <div className={light ? "lightMode" : "darkMode"}>
                  <hr style={{position:"absolute",height:"280px",left:"50px"}}/>
                  <p style={{position:"absolute",left:"40px",top:"80px"}}>Hello</p>
                  <p style={{position:"absolute",left:"40px",top:"180px"}}>Hello</p>
                  <p style={{position:"absolute",left:"40px",top:"280px"}}>Hello</p>

                </div>
                <div className={light ? "lightMode" : "darkMode"}>

                </div>
            </div>
        </div>
    )
}

export default Experience
