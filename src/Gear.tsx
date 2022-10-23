const Gear: React.FC<{viewportWidth: number, scrollPos: number}> = ({viewportWidth, scrollPos}) => {
    return (
        <img
            id="gear"
            src="./gear.svg"
            alt="Gear"
            style={{
                left: `${viewportWidth <= 650 ? 4.5 : 5}px`,
                top: `${viewportWidth <= 650 ? 4.5 : 5}px`,
                height: `${viewportWidth <= 650 ? 36 : 45}px`,
                transform: `rotate(${scrollPos / ((viewportWidth <= 650 ? 36 : 45) * Math.PI / 360)}deg)`
            }}
        />
    );
}

export default Gear;
