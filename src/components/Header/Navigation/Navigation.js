import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const [currentPage, setCurrentPage] = useState(String(document.URL.match(/\w+?$/)));

    const changeHighlight = value => {
        setCurrentPage(value);
    }

    return (
        <nav className={props.show ? 'visible' : null}>
            <ul>
                <Link to="/">
                    <li 
                        className={currentPage === 'null' ? 'highlight' : null} 
                        onClick={() => {changeHighlight('null'); props.click();}}
                    >
                        Home
                    </li>
                </Link>
                <Link to="/about">
                    <li 
                        className={currentPage === 'about' ? 'highlight' : null} 
                        onClick={() => {changeHighlight('about'); props.click();}}>
                        About
                    </li>
                </Link>
                <Link to="/projects">
                    <li 
                        className={currentPage === 'projects' ? 'highlight' : null} 
                        onClick={() => {changeHighlight('projects'); props.click();}}>
                        Projects
                    </li>
                </Link>
                <Link to="/contact">
                    <li 
                        className={currentPage === 'contact' ? 'highlight' : null} 
                        onClick={() => {changeHighlight('contact'); props.click();}}>
                        Contact
                    </li>
                </Link>
            </ul>
        </nav>
    )
};

export default Navigation;
