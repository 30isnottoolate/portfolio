import React, { useState, useEffect } from 'react';
import MenuButton from './MenuButton';

const NavBar: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

        setIsMenuVisible(document.body.offsetWidth / remValue <= 38 ? false : true);
    }, [])

    useEffect(() => {
        window.addEventListener("resize", () => {
            let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

            setIsMenuVisible(document.body.offsetWidth / remValue <= 38 ? false : true);
        });
        return () => window.removeEventListener("resize", () => { });
    }, []);

    const handleMenuClick = () => setIsMenuVisible((prevValue) => !prevValue);

    return (
        <>
            <header className="header-footer" >
                <a
                    id="logo"
                    className="header-link"
                    href="#welcome" >
                    30isnottoolate
                </a>
            </header>
            <nav
                style={{
                    display: (isMenuVisible ? "grid" : "none")
                }}
            >
                <a className="header-link" href="#bio">
                    Bio
                </a>
                <a className="header-link" href="#skills">
                    Skills
                </a>
                <a className="header-link" href="#projects">
                    Projects
                </a>
                <a className="header-link" href="#contact">
                    Contact
                </a>
            </nav>
            <MenuButton
                clickHandler={handleMenuClick}
                isMenuVisible={isMenuVisible}
            />
        </>
    );
}

export default NavBar;