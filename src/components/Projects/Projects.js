import React from 'react';
import ProjectTile from './ProjectTile/ProjectTile';
import './Projects.scss';

const projectDetails = [
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
    },
    {
        title: 'Library',
        description: 'CRUD library app, keeps track of books read through local storage',
        site: 'https://flakari.github.io/js-library',
        github: 'https://github.com/Flakari/js-library',
        image: 'Library.png'
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