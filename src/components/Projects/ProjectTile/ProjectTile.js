import React from 'react';
import './ProjectTile.scss';

const ProjectTile = (props) => {
    const prop = props.project;
    const style = {
        background: `linear-gradient(rgba(0, 184, 255, 0.8), rgba(0, 137, 190, 0.9)), url('/images/${prop.image}')`, backgroundSize: 'cover',
        backgroundPosition: '0% 0%, 0% 85%'
    }
    return (
        <div style={style} className="project-tile">
            {/* <img src={`/images/${prop.image}`} alt={`${prop.title} Project`}/> */}
            <div>
                <h2>{prop.title}</h2>
                <p>{prop.description}</p>
                <div className="button-container">
                    <a href={prop.site} target="_blank" rel="noopener noreferrer">
                        <button className="site-button"><img src={'images/globe.png'} alt='View Site' /></button>
                    </a>
                    <a href={prop.github} target="_blank" rel="noopener noreferrer">
                        <button className="github-button"><img src={'images/Github Logo.png'} alt='View Github' /></button>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ProjectTile;