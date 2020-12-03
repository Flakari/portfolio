import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav className={props.show ? 'visible' : null}>
            <ul>
                <NavLink to="/" exact>
                    <li onClick={props.click}>Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li onClick={props.click}>About</li>
                </NavLink>
                <NavLink to="/projects">
                    <li onClick={props.click}>Projects</li>
                </NavLink>
                <NavLink to="/contact">
                    <li onClick={props.click}>Contact</li>
                </NavLink>
            </ul>
        </nav>
    )
};

export default Navigation;
