import { hover } from "@testing-library/user-event/dist/hover";

interface ArrowProps {
    arrowClassName: string;
    posX: number;
    posY: number;
    mirrored: boolean;
    clickHandler: () => void;
    color: string;
    hoverColor: string;
    bgColor: string;
    strokeWidth: number;
}

const Arrow: React.FC<ArrowProps> = ({arrowClassName, posX, posY, mirrored, clickHandler, color, hoverColor, bgColor, strokeWidth}: ArrowProps) => {
    return (
        <svg className={`arrow-button ${arrowClassName}`} style={{ fill: bgColor, left: posX, top: posY, transform: mirrored ? "scaleX(-1)" : "scaleX(1)" }} onClick={clickHandler} viewBox="-5 -5 35 60">
            <polygon points="0,0 25,25 0,50" onMouseEnter={(event) => event.currentTarget.style.stroke = hoverColor} onMouseLeave={(event) => event.currentTarget.style.fill = color} style={{ stroke: color, strokeWidth: strokeWidth }} />
        </svg>
    );
}

export default Arrow;
