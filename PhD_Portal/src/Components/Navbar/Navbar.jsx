import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from '../ButtonLink/ButtonLink.jsx';
import Profile from '../Profile/Profile.jsx';

const Navbar = ({ Text }) => {
    return(
    <nav className="navbar">
        <h1>{Text}</h1>
        <div className = "rightnav">
            <ButtonLink className="btn"><FontAwesomeIcon icon= {faBell} /></ButtonLink>
            <ButtonLink className="btn"><FontAwesomeIcon icon= {faCaretDown} /></ButtonLink>
            <ButtonLink to = "/profile" className="btn"><FontAwesomeIcon icon= {faUser} /></ButtonLink>
        </div>
    </nav>
    )   
}

export default Navbar