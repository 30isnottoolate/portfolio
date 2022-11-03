interface ArrowProps {
    visibilityClass: string;
    svgStrokeClass: string;
    posX: number;
    posY: number;
    mirrored: boolean;
    clickHandler: () => void;
}

const Arrow: React.FC<ArrowProps> = ({
    visibilityClass, svgStrokeClass, posX, posY, mirrored, clickHandler
}: ArrowProps) => {
    return (
        <svg
            className={`arrow-button ${visibilityClass}`}
            style={{
                left: posX,
                top: posY,
                transform: mirrored ? "scaleX(-1)" : "scaleX(1)"
            }}
            onClick={clickHandler}
            viewBox="-5 -5 35 60"
        >
            <polygon
                className={svgStrokeClass}
                points="0,0 25,25 0,50"
                style={{
                    strokeWidth: 5
                }} />
        </svg>
    );
}

export default Arrow;
