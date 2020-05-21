import React from 'react';
import ProjectTile from './ProjectTile/ProjectTile';
import './Projects.scss';

const projectDetails = [
    {
        title: 'VG Lists',
        description: 'React video game list manager using React Router, CRUD app using data from RAWG.io API',
        site: 'https://flakari.github.io/vg-lists',
        github: 'https://github.com/Flakari/vg-lists',
        image: 'VG-Lists.png'
    },
    {
        title: 'Weather!',
        description: 'Weather app made using React, uses data collected from OpenWeatherMap API',
        site: 'https://flakari.github.io/weather-app',
        github: 'https://github.com/Flakari/weather-app',
        image: 'Weather-App.png'
    },
    {
        title: 'Game of Life',
        description: 'British Mathematician John Conway\'s game of Life made using React',
        site: 'https://flakari.github.io/game-of-life',
        github: 'https://github.com/Flakari/game-of-life',
        image: 'Game-of-Life.png'
    },
    {
        title: 'Pomodoro Clock',
        description: 'Vanilla JavaScript pomodoro clock, keeps track of user\'s time worked',
        site: 'https://flakari.github.io/pomodoro-clock',
        github: 'https://github.com/Flakari/pomodoro-clock',
        image: 'Pomodoro-Clock.png'
    }
];

const Projects = () => { return (
        <main id="projects">
            <h1 style={{color: 'black'}}>{'<Projects />'}</h1>
            <p style={{marginBottom: '30px'}}>Personal projects I have worked on to improve my skills and gain experience in the front-end space</p>
            <div id="projects-container">
                {projectDetails.map(item => <ProjectTile key={item.title} project={item} />)}
            </div>
        </main>
    )
};

export default Projects;
