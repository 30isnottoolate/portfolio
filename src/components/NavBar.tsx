import React, { useState, useEffect, RefObject } from 'react';
import Gear from './Gear';
import MenuButton from './MenuButton';

const NavBar: React.FC<{ paraContainerRef: RefObject<HTMLDivElement> }> = ({ paraContainerRef }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isItDark, setIsItDark] = useState(() => {
        if (localStorage.getItem("isItDark")) {
            if (localStorage.getItem("isItDark") === "true") {
                return true;
            } else return false;
        } else {
            return true;
        }
    });

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

    useEffect(() => {
        document.body.className = isItDark ? "dark" : "light";
        localStorage.setItem("isItDark", isItDark.toString());
    }, [isItDark]);

    const handleMenuClick = () => setIsMenuVisible((prevValue) => !prevValue);

    return (
        <>
            <Gear
                changeTheme={() => setIsItDark((prevValue) => !prevValue)}
                paraContainerRef={paraContainerRef}
            />
            <header className="header-footer" >
                <a
                    id="logo"
                    className="header-link"
                    href="#welcome" >
                    30isnottoolate
                </a>
                <MenuButton
                    clickHandler={handleMenuClick}
                    isMenuVisible={isMenuVisible}
                />
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
        </>
    );
}

export default NavBar;