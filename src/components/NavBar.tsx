import React, { useState, useEffect, RefObject } from 'react';
import Gear from './Gear';
import MenuButton from './MenuButton';

const NavBar: React.FC<{ paraContainerRef: RefObject<HTMLDivElement> }> = ({ paraContainerRef }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("down");
    const [scrollPos, setScrollPos] = useState(0);
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
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

            setIsMenuVisible(document.body.offsetWidth / remValue <= 38 ? false : true);
        });

        return () => window.removeEventListener("resize", () => { });
    }, []);

    useEffect(() => {
        let refHolder = paraContainerRef.current;

        refHolder && refHolder.addEventListener("scroll", () => {
            const scrollTop = refHolder ? refHolder.scrollTop : 0;
            let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

            setScrollPos(prevState => {
                setScrollDirection(scrollTop > prevState ? "down" : "up");
                return scrollTop;
            });

            setScrollPos(scrollTop);
            document.body.offsetWidth / remValue <= 38 && setIsMenuVisible(false);
        });

        return () => { refHolder && refHolder.removeEventListener("scroll", () => { }) };
    }, []);

    useEffect(() => {
        document.body.className = isItDark ? "dark" : "light";
        localStorage.setItem("isItDark", isItDark.toString());
    }, [isItDark]);

    const handleMenuClick = () => setIsMenuVisible((prevValue) => !prevValue);

    const navBarVisibility = () => {
        let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

        if (scrollPos / remValue > 25 && scrollDirection === "down") {
            return false;
        } else if (scrollDirection === "up") {
            return true;
        } else return true;
    }

    return (
        <>
            <Gear
                scrollPos={scrollPos}
                changeTheme={() => setIsItDark((prevValue) => !prevValue)}
            />
            <header
                className="header-footer"
                style={{ top: `${navBarVisibility() ? "0" : "-3.5rem"}` }} >
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
                    display: isMenuVisible ? "grid" : "none",
                    transform: `translateY(${navBarVisibility() ? "0" : "-3.5rem"})`
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