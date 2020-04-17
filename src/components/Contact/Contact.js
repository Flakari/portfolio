import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <main id="contact-container">
            <h1>{'<Contact />'}</h1>
            <p>Like what you see? Feel free to connect with me through any of these means or download my resume to learn even more about me and what I have to offer!</p>
           <ul>
                <li><a href="mailto:natedimock@yahoo.com">
                    <button><img src={require("../../images/email.svg")} alt=""></img>E-mail</button>
                </a></li>
                <li><a href={require("../../files/Nathan Dimock Resume.pdf")} download>
                   <button><img src={require("../../images/Adobe-PDF-File-Icon-01.svg")} alt=""></img>Resume</button>
                </a></li>
                <li><a href="https://www.github.com/Flakari" target="_blank" rel="noopener noreferrer">
                   <button><img src={require("../../images/github-logo.svg")} alt=""></img>Github</button>
                </a></li>
                <li><a href="https://www.linkedin.com/in/nathan-dimock/" target="_blank" rel="noopener noreferrer">
                   <button><img src={require("../../images/linkedin-logo.png")} alt=""></img>LinkedIn</button>
                </a></li>
           </ul>
        </main>
    );
};

export default Contact;