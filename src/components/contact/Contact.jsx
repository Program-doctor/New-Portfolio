import { useState } from "react";
import './Contact.css';
import { FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export default function Contact(){
    const [formStatus, setFormStatus]=useState('Send Message');
  
    return(
        <div id="contact">
            <small className="text-light">Get in Touch</small>
            <h2>Contact Me</h2>
            <div className="align">
            <div className="wrap">
            <div className="container">
                <div className="card">
                    <FiMail className="icon"/>
                <h4>Email</h4>
                <h5>sylvesterpro2017@gmail.com</h5>
                <a href="mailto:sylvesterpro2017@gmail.com" title="Send me a message" >Send a message</a>
                </div>
                <div className="card">
                    <BsWhatsapp className="icon"/>
                <h4>WhatsApp</h4>
                <h5>+234 816 850 2558</h5>
                <a href="https://api.whatsapp.com/send?phone=08168502558" target="_blank" rel="noopener noreferrer" title="Send me a message">Send a message</a>
                </div>
                <div className="card">
                    <BsLinkedin className="icon"/>
                <h4>Linkedin</h4>
                <h5>Sylvester Promise</h5>
                <a href="https://www.linkedin.com/in/sylvester-promise-queen-of-ai-7492a5247/" target="_blank" rel="noopener noreferrer" title="Send me a message">Send a message</a>
                </div>
            </div>
            <form 
            method="POST" 
            name="contact" 
            data-netlify="true" 
            netlify-honeypot="bot-field" 
            action="/Success" 
            id="form">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" color="red" placeholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder="Leave a Message"></textarea>
            <button className="btn btn-primary" type="submit" onClick={()=>setFormStatus('Submitting...')}>{formStatus}</button>
            </form>
            </div>
        </div>
        </div>
    )
}