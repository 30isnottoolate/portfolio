import React, { useState, useEffect } from 'react';
import MenuButton from './MenuButton';

const NavBar: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

        setIsMenuVisible(document.body.offsetWidth / remValue <= 40.5 ? false : true);
    }, [])

    useEffect(() => {
        window.addEventListener("resize", () => {
            let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

            setIsMenuVisible(document.body.offsetWidth / remValue <= 40.5 ? false : true);
        });
        return () => window.removeEventListener("resize", () => { });
    }, []);

    const handleMenuClick = () => setIsMenuVisible((prevValue) => !prevValue);

    return (
        <>
            <header className="header-footer" >
                <a
                    id="logo"
                    href="#welcome" >
                    30isnottoolate
                </a>
            </header>
            <nav
                style={{
                    display: (isMenuVisible ? "grid" : "none")
                }}
            >
                <a href="#bio">
                    Bio
                </a>
                <a href="#skills">
                    Skills
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#contact">
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