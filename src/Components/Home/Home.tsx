import React, { useContext } from 'react'
import { MainstoreContext } from '../../Stores/mainStore'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Nav from '../Nav/Nav'
import Skills from '../Skilss/Skills'
import HeroSection from './HeroSection'
import "./home.css"
const Home = () => {
    const darkMode = {
        backgroundColor:"#151515",
        color:"white",
        transition: "0.5s",
        paddingLeft:"20%"
        }
        const lightMode = {
          backgroundColor:"white",
          color:"#151515",
          transition: "0.5s",
          paddingLeft:"20%"
        }
        const store = useContext(MainstoreContext);
        const {lightMode : light,setMode} = store;
    return (
        <div style={light ? lightMode : darkMode}>
            <HeroSection />
            <About />
            <Skills />
            <Experience />
        </div>
    )
}

export default Home
