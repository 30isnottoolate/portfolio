import {useRef} from 'react';

const BackToTop: React.FC<{ scrollPos: number, color: string, hoverColor: string, strokeColor: string }> = ({ scrollPos, color, hoverColor, strokeColor }) => {
    const pathRef = useRef<SVGPathElement>(null);

    const handleMouseEnter = () => {
        if (pathRef.current) {
            pathRef.current.style.fill = hoverColor;
        }
    }

    const handleMouseLeave = () => {
        if (pathRef.current) {
            pathRef.current.style.fill = color;
        }
    }

    return (
        <a
            id="back-to-top"
            href="#welcome"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: "fixed",
                backgroundColor: strokeColor,
                bottom: (scrollPos > 1300 ? "35px" : "-50px"),
            }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                strokeWidth="0.1"
                viewBox="0 0 16 16">
                <path
                    ref={pathRef}
                    style={{
                        fill: color,
                        stroke: strokeColor
                    }}
                    d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
            </svg>
        </a>
    );
}

export default BackToTop;
