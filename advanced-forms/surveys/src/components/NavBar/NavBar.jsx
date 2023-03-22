import logo from "../../_assets/logo.png"
import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
        <div id='NavBarContainer' >
            <img src={logo} />
            <h1>Survey Tool</h1>
            <h3></h3>
            <ul>
                <li><NavLink to="/SampleSurvey" >Sample Survey</NavLink></li>
                <li><NavLink to="/SensoryPreferences" >Sensory Preferences</NavLink></li>
                <li><NavLink to="/Report" >Report</NavLink></li>
                <li><NavLink to="/" >Home</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;