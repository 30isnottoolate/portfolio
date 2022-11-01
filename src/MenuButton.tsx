interface MenuButtonProps {
    clickHandler: () => void;
    themeClass: string;
    isMenuVisible: boolean;
}

const MenuButton = ({clickHandler, themeClass, isMenuVisible}: MenuButtonProps) => {
    return (
        <div id="menu-button" style={{cursor: "pointer"}} onClick={clickHandler} >
            <div className={themeClass} style={{transform: (isMenuVisible ? "translate(0, 10px) rotate(-45deg)" : "none")}} />
            <div className={themeClass} style={{opacity: (isMenuVisible ? "0" : "1")}}/>
            <div className={themeClass} style={{transform: (isMenuVisible ? "translate(0, -10px) rotate(45deg)" : "none")}}/>
        </div>
    );
}

export default MenuButton;
