interface ArrowProps {
    arrowClassName: string;
    posX: number;
    posY: number;
    mirrored: boolean;
    clickHandler: () => void;
    color: string;
    bgColor: string;
    strokeWidth: number;
}

const Arrow: React.FC<ArrowProps> = ({arrowClassName, posX, posY, mirrored, clickHandler, color, bgColor, strokeWidth}: ArrowProps) => {
    return (
        <svg className={`arrow-button ${arrowClassName}`} style={{ fill: bgColor, left: posX, top: posY, transform: mirrored ? "scaleX(-1)" : "scaleX(1)" }} onClick={clickHandler} viewBox="-5 -5 35 60">
            <polygon points="0,0 25,25 0,50" style={{ stroke: color, strokeWidth: strokeWidth }} />
        </svg>
    );
}

export default Arrow;
