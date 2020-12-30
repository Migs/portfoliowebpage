import React from 'react';
//import "../css/navbar.css";
import Discord from "../GitHubMark.png";
import Instagram from "../instagram.png";
import Linkedin from "../linkedin.png";
import Twitter from "../twitterlogo.png"

export default function Navbar() {
    return(
        <header style={{position: 'absolute', left: '0', right: '0', bottom: '0', paddingBottom: '2vh'}}>
            <div>
                <div>
                    <a href="https://github.com/Migs" target="_blank" >
                        <img src={Discord} width="35" height="35" style={{paddingLeft: "5px"}} />
                    </a>
                    <a href="https://www.instagram.com/migswilliams/" target="_blank">
                        <img src={Instagram} width="35" height="35" style={{paddingLeft: "5px"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/miguel-williams-2961581b9/" target="_blank">
                        <img src={Linkedin} width="35" height="35" style={{paddingLeft: "5px"}} />
                    </a>
                    <a href="https://twitter.com/ChaffyMigs" target="_blank">
                        <img src={Twitter} width="35" height="35" style={{paddingLeft: "5px"}} />
                    </a>
                </div>
            </div>
        </header>
    );
}