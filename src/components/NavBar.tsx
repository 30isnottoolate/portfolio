import React, {useState, useEffect} from 'react';
import MenuButton from './MenuButton';

const NavBar: React.FC<{isItDark: boolean}> = ({isItDark}) => {
    const [bodyWidth, setBodyWidth] = useState(380);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        setBodyWidth(document.body.offsetWidth);
        setIsMenuVisible(document.body.offsetWidth <= 650 ? false : true);
    }, [])

    useEffect(() => {
		window.addEventListener("resize", () => {
			setBodyWidth(document.body.offsetWidth);
			setIsMenuVisible(document.body.offsetWidth <= 650 ? false : true);
		});
		return () => window.removeEventListener("resize", () => { });
	}, []);

    const handleMenuClick = () => setIsMenuVisible((prevValue) => !prevValue);

	const headerFooterTheme = () => isItDark ? "dark-header-footer" : "light-header-footer";
	const navTheme = () => bodyWidth <= 650 ? (isItDark ? "dark-mini-nav" : "light-mini-nav") : "";
	const navAnchorTheme = () => bodyWidth <= 650 ? (isItDark ? "dark-mini-nav-a" : "light-mini-nav-a") : "";

    return (
        <header className={headerFooterTheme()} >
            <a
                id="logo"
                href="#welcome" >
                30isnottoolate
            </a>
            <nav
                className={navTheme()}
                style={{
                    display: (isMenuVisible ? "grid" : "none"),
                    borderWidth: (bodyWidth <= 380 ? "0 0 1px 0" : bodyWidth > 650 ? "0" : "0 0 1px 1px")
                }}
            >
                <a
                    className={navAnchorTheme()}
                    href="#bio">
                    Bio
                </a>
                <a
                    className={navAnchorTheme()}
                    href="#skills">
                    Skills
                </a>
                <a
                    className={navAnchorTheme()}
                    href="#projects">
                    Projects
                </a>
                <a
                    className={navAnchorTheme()}
                    href="#contact">
                    Contact
                </a>
            </nav>
            <MenuButton
                clickHandler={handleMenuClick}
                themeClass={isItDark ? "dark-menu-button" : "light-menu-button"}
                isMenuVisible={isMenuVisible}
            />
        </header>
    );
}

export default NavBar;