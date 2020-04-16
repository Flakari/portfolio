import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import './Header.scss';

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showNav, setShowNav] = useState(false);

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    });

    const clickHandler = () => {
        setShowNav(() => {
            if (windowWidth <= 700) {
                return !showNav;
            } else {
                return false;
            }
        });
    };

    return (
        <>
            <header>
                <button id="header-hamburger" onClick={clickHandler} aria-label="Toggle Navigation"><img src="images/Hamburger_icon.svg" alt=""></img></button>
                <p>Nathan Dimock</p>
                {windowWidth > 700 ? <Navigation show={showNav} click={clickHandler} /> : null}
            </header>
            {windowWidth <= 700 ? <Navigation show={showNav} click={clickHandler} /> : null}
        </>
    );
};

export default Header;