import logo from "../../_assets/logo.png"
import { NavLink } from 'react-router-dom'
import { useState } from "react";
import "./navbar.css";

function NavBar () {

    const [currPage, setCurrPage] = useState("Home");

    return (
        <div id='NavBarContainer' >
            <div id="headerContainer">
                <img src={logo} />
                <div id="titleText">
                    <h1>Survey Tool</h1>
                    <h3>{currPage}</h3>
                </div>
            </div>
            <ul>
                <li><NavLink to="/SampleSurvey" onClick={() => setCurrPage("Sample Survey")}>Sample Survey</NavLink></li>
                <li><NavLink to="/SensoryPreferences" onClick={() => setCurrPage("Sensory Preferences")}>Sensory Preferences</NavLink></li>
                <li><NavLink to="/Report" onClick={() => setCurrPage("Report")}>Report</NavLink></li>
                <li><NavLink to="/" onClick={() => setCurrPage("Home")}>Home</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;