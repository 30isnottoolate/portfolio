import React, { useState, useEffect } from 'react';
import MenuButton from './MenuButton';

const NavBar: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        setIsMenuVisible(document.body.offsetWidth <= 650 ? false : true);
    }, [])

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMenuVisible(document.body.offsetWidth <= 650 ? false : true);
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