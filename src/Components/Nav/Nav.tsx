
import React, { useContext, useState } from "react"
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { MainstoreContext } from "../../Stores/mainStore";
import "./nav.css"
const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeNav = () => setClick(false);
    const store = useContext(MainstoreContext);
    const { lightMode: light, setMode } = store;
    const desktopNav = {
        width: "250px",
        backgroundColor: light ? "white" : "#151515"
    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const mobileNav = {
        width: click ? "250px" : "0px",
        backgroundColor: light ? "white" : "#151515"
    }
    const pcNavItems = {
        opacity: "1"
    }
    const mobileNavItems = {
        opacity: click ? "1" : "0"
    }
    return (
        <div style={{ position: "fixed", zIndex: 1 }}>
            <div id="mySidenav" style={isTabletOrMobile ? mobileNav : desktopNav} className="sidenav">
                <h1 style={isTabletOrMobile ? mobileNavItems : pcNavItems}>Ragib</h1>
                <ul style={isTabletOrMobile ? mobileNavItems : pcNavItems}>
                    {isTabletOrMobile && <li className="closebtn" onClick={() => closeNav()}>  &times;</li>}
                    <li >About</li>
                    <li >Skills</li>
                    <li >Experience</li>
                    <li >Projects</li>
                    <li>Contact</li>
                </ul>
                <span className="copyright" style={isTabletOrMobile ? mobileNavItems : pcNavItems}>
                    &copy; 2021 Ragib Ibne Hossain
                </span>

            </div>
            {isTabletOrMobile && <span className="nav-toggle-button" onClick={() => handleClick()}>&#9776;</span>}
        </div>
    )
}

export default Nav
