import React from 'react';

interface MenuButtonProps {
    clickHandler: () => void;
    isMenuVisible: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({clickHandler, isMenuVisible}: MenuButtonProps) => {
    return (
        <div id="menu-button" style={{cursor: "pointer"}} onClick={clickHandler} >
            <div className="menu-button-parts" style={{transform: (isMenuVisible ? "translate(0, 0.5rem) rotate(-45deg)" : "none")}} />
            <div className="menu-button-parts" style={{opacity: (isMenuVisible ? "0" : "1")}}/>
            <div className="menu-button-parts" style={{transform: (isMenuVisible ? "translate(0, -0.5rem) rotate(45deg)" : "none")}}/>
        </div>
    );
}

export default MenuButton;
