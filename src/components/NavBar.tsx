import React, { useState, useEffect } from 'react';
import MenuButton from './MenuButton';

const NavBar: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [wideMode, setWideMode] = useState(true);
    const [microMode, setMicroMode] = useState(false);

    useEffect(() => {
        setIsMenuVisible(document.body.offsetWidth <= 650 ? false : true);
        setWideMode(document.body.offsetWidth > 650 ? true : false);
        setMicroMode(document.body.offsetWidth <= 380 ? true : false);
    }, [])

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMenuVisible(document.body.offsetWidth <= 650 ? false : true);
            setWideMode(document.body.offsetWidth > 650 ? true : false);
            setMicroMode(document.body.offsetWidth <= 380 ? true : false);
        });
        return () => window.removeEventListener("resize", () => { });
    }, []);

    const handleMenuClick = () => setIsMenuVisible((prevValue) => !prevValue);

    return (
        <header
            className="header-footer"
            style={{
                height: `${
                    wideMode ? "3.5rem" :
                    !wideMode && !microMode && !isMenuVisible ? "2.75rem" :
                    !wideMode && !microMode && isMenuVisible ? "5.5rem" :
                    microMode && !isMenuVisible ? "2.75rem" : "13.75rem"}`,
                borderRadius: `0 0 0 ${isMenuVisible && !wideMode ? "0" :
                    !isMenuVisible && !wideMode ? "1.25rem" : "1.75rem"}`
            }} >
            <a
                id="logo"
                href="#welcome" >
                30isnottoolate
            </a>
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
        </header>
    );
}

export default NavBar;