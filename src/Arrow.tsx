interface ArrowProps {
    arrowClassName: string;
    posX: number;
    posY: number;
    mirrored: boolean;
    clickHandler: () => void;
    color: string;
    strokeWidth: number;
}

const Arrow: React.FC<ArrowProps> = ({arrowClassName, posX, posY, mirrored, clickHandler, color, strokeWidth}: ArrowProps) => {
    return (
        <svg className={`arrow-button ${arrowClassName}`} style={{ left: posX, top: posY, transform: mirrored ? "scaleX(-1)" : "scaleX(1)" }} onClick={clickHandler} height="75px" width="40px" viewBox="-5 -5 30 70">
            <polygon points="25,0 25,50 0,25" style={{ stroke: color, strokeWidth: strokeWidth }} />
        </svg>
    );
}

export default Arrow;
