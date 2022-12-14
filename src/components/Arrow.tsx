interface ArrowProps {
    visibilityClass: string;
    posX: number;
    mirrored: boolean;
    clickHandler: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ visibilityClass, posX, mirrored, clickHandler }: ArrowProps) => {
    return (
        <svg
            className={`arrow-button ${visibilityClass}`}
            style={{
                left: posX,
                transform: mirrored ? "scaleX(-1)" : "scaleX(1)",
                pointerEvents: visibilityClass === "visible" ? "initial" : "none"
            }}
            onClick={clickHandler}
            viewBox="4 1 9 14"
        >
            <path
                className="svg-fill"
                d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
            />
        </svg>
    );
}

export default Arrow;
