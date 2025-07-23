import React from "react";
import weatherapp from "../../work/React2.png";
import landingpage from "../../work/landingpage.png";
import Moodulo from "../../work/moodulo.png";
import './Portfolio.css'

export default function Portfolio(){
  const data=[
      {
      id:1,
      image: Moodulo,
      title:'Moodulo - Productivity Web App',
      details:'Moodulo is a smart, user-focused productivity tool design to help users organize tasks, track moods and improve daily routines.',
      stacks: 'React • Tailwind CSS •JSON Server •',
      github:'https://github.com/Program-doctor/Moodulo',
      demo:'https://moodulo.netlify.app/',alt:'Productivity App'
    },
    {
      id:2,
      image:landingpage,
      title:'Gallery Portfolio',
      details:'Portfolio-style gallery website showcasing image collections. It features a clean, modern layout with responsive design elements that adjust seamlessly across devices.',
      stacks: 'JavaScript • HTML • CSS',
      github:'https://github.com/Program-doctor/PPBusiness',
      demo:'https://exquisite-mooncake-fdbe30.netlify.app/',
      alt:"Portfolio Landing Page"
    },
    {
      id:3,
      image:weatherapp,
      title:'React Weather App',
      details:'Fetches real-time data using OpenWeatherMap API. A simple UI to check current conditions and location based forecasts.',
      stacks: 'React • CSS • API Integration',
      github:'https://github.com/Program-doctor/weather-react-app',
      demo:'http://splendid-pavlova-2335ff.netlify.app/',
      alt:'React Weather App'
    }
  ]
    return(
        <div id="portfolio">
          <h5 className="text-light">My Recent Work</h5>
          <h2>Portfolio</h2> 
          <div className="portfolio-container"> 
          { 
          data.map(({id,image,title,details,stacks,github,demo,alt})=>{
            return(
          <div key={id} className="content">
          <img src={image} alt={alt}  width={330} height={400} /> 
          <h3>{title}</h3>
          <small className="text-light details">{details}</small>
          <p><strong className="text-light">{stacks}</strong></p>
          <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn" title="Link to Github">Github</a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" title="Link to Live page">Live Demo</a>
          </div>
        </div>
            )
          })
      }
      </div>
     </div>
    )
}