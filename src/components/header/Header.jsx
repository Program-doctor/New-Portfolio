import React from "react";
import resume from "../../profiles/resume.pdf";
import profile1 from "../../profiles/Promise.png"
import "../header/Header.css"
import Socials from "../socials/Socials";


export default function Header(){
    return (
        <div id="top">
                <img src={profile1}
                alt="Me" />
        
            <p>Hello, I am</p>
            <h1>Promise Sylvester</h1>
            <div className="dev-me">
                <span id="web">Web Designer &</span>
                <span> Frontend Developer</span>
            </div>
            <h5 className="text-light">I turn ideas into scroll-worthy, responsive web experiences.</h5>
            <a href={resume} className="btn" title="My Resume" download>Download CV</a>
            <a href="#contact" className="btn btn-primary" title="Contact Me">Get in Touch</a>
            <Socials/>
            <a href="#contact" title="Contact page" className="scroll">Scroll down</a>
        </div>
    )
}