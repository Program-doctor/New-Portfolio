import profile3 from "../../profiles/profile1.jpg";
import "./About.css"
import { BiCodeBlock } from 'react-icons/bi';
import { SlBadge } from 'react-icons/sl';
import { AiFillFolderOpen } from 'react-icons/ai';

export default function About(){
    return (
        <div id="about">
            <h5 className="text-light">Get to know</h5>
            <h2>About me</h2>
            <div className="about-container">
            <div className="about__me">
                <img src={profile3} width="250"
                alt="me" />
            </div>
            <div className="about-content">
            <div className="about__cards-container">  
            <div className="about-card card1">
            <BiCodeBlock className="about-icon"/>
            <h6>Industry</h6>
            <small>Tech</small></div>
            <div className="about-card">
                <SlBadge className="about-icon"/>
                <h6>Experience</h6>
            <small>1+ Year working</small></div>
            <div className="about-card">
                <AiFillFolderOpen className="about-icon"/>
                <h6>Projects</h6>
            <small>6+ Completed</small></div>
            </div>
            <p className="text-light" >Promise is a Web Developer, with skills in Responsive UI designs and Web development, who enjoys building products and applications that solve human problems.With a background in Mathematics, Artificial Intelligence and Prompt Engineering. Promise is able to add value and build a dynamic career by developing scalable tech solutions that address specific user needs.</p>
            <p className="text-light">Today, she loves working on projects that simplify life. Right now, she is working on a personal project called <strong>Moodulo, </strong>it is a a modular productivity web app that will help users manage tasks, track habits and stay focused. It is still in progress, but it has been one of the most exciting challenges so far. The goal is to build a clean, responsive interface with smart features and seamless interactions. She is designing it with real people in mind, not just how it looks but how it feels to use.  </p>
            <p>She is experienced in building and maintaining websites, implementing responsive designs, optimizing website performance and collaborating with any development team to implement new features and fix bugs.</p>
            <p>Promise is always looking for opportunities to learn and improve her skills in order to become a world-class Developer in the tech space. Her interests include Web Design, Web Development, Data Science, Machine Learning and Artificial Intelligence.</p>
            <a href="#contact" className='btn btn-primary' title="Contact Me">Let's Talk</a>
            </div>
        </div>
        </div>
    )
}