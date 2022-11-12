import React, {useState, useEffect} from 'react';
import MenuButton from './MenuButton';

const NavBar: React.FC = () => {
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

    return (
        <header className="header-footer" >
            <a
                id="logo"
                href="#welcome" >
                30isnottoolate
            </a>
            <nav
                style={{
                    display: (isMenuVisible ? "grid" : "none"),
                    borderWidth: (bodyWidth <= 380 ? "0 0 1px 0" : bodyWidth > 650 ? "0" : "0 0 1px 1px")
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