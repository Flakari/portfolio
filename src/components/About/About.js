import React from 'react';
import './About.scss';

const About = () => {
    return (
        <main id="about">
            <h1>{'<About />'}</h1>
            <p>I'm a front-end JavaScript web developer with experience creating websites using vanilla JavaScript and JavaScript frameworks like React. I have an art background which is why the front end appeals to me so much. I've found great enjoyment in figuring out problems, whether how to get a layout to work on various devices, or how to program the underlying logic that makes the website functional to the user.</p>
            <section id="about-lists">
                <div>
                    <h2>Technologies</h2>
                    <ul id="technologies">
                        <li><img src={require("../../images/javascript.svg")} alt=""></img>JavaScript</li>
                        <li><img src={require("../../images/react-2.svg")} alt=""></img>React</li>
                        <li><img src={require("../../images/react-router.svg")} alt=""></img>React Router</li> 
                        <li><img src={require("../../images/html-5.svg")} alt=""></img>HTML5</li>
                        <li><img src={require("../../images/css-5.svg")} alt=""></img>CSS3</li>
                        <li><img src={require("../../images/sass-1.svg")} alt=""></img>SASS</li>
                    </ul>
                </div>
                <div>
                    <h2>Tools</h2>
                    <ul id="tools">    
                        <li><img src={require("../../images/github-logo.svg")} alt=""></img>Github</li>
                        <li><img src={require("../../images/Visual_Studio_Code_1.35_icon.svg")} alt=""></img>Visual Studio Code</li>
                        <li><img src={require("../../images/Codepen-logo.png")} alt=""></img>Codepen</li>
                        <li><img src={require("../../images/Figma-logo.svg")} alt=""></img>Figma</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default About;