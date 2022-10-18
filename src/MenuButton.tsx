interface MenuButtonProps {
    isMenuVisible: boolean;
    clickHandler: () => void;
}

const MenuButton = ({isMenuVisible, clickHandler}: MenuButtonProps) => {
    return (
        <div className="menu-button" style={{cursor: "pointer"}} onClick={clickHandler} >
            <div style={{transform: (isMenuVisible ? "translate(0, 11px) rotate(-45deg)" : "none")}} />
            <div style={{opacity: (isMenuVisible ? "0" : "1")}}/>
            <div style={{transform: (isMenuVisible ? "translate(0, -11px) rotate(45deg)" : "none")}}/>
        </div>
    );
}

export default MenuButton;
