import React from 'react';
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import Discord from "../GitHubMark.png";
import Instagram from "../instagram.png";
import Linkedin from "../linkedin.png";
import Twitter from "../twitterlogo.png"

export default function Navbar() {
    return(
        <header style={{position: 'fixed'}}>
            <div className="generaldiv">
                <nav style={{float: 'left'}}>
                    <NavLink to="/" exact className="links">
                        Miguel Williams <br/>
                        Software Engineer
                    </NavLink>
                </nav>
                <div className="imagediv">
                </div>
            </div>
        </header>
    );
}