import React, { useRef } from "react";

interface IconProps {
    href: string;
    src: string;
    alt: string;
    bGColor?: string;
}

const Icon: React.FC<IconProps> = ({ href, src, alt, bGColor }: IconProps) => {
    const iconRef = useRef<HTMLAnchorElement>(null);
    const tooltipRef = useRef<HTMLParagraphElement>(null);

    const handleHoverStart = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "1";
    }

    const handleHoverEnd = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
    }

    const getToolTipTop = () => {
        if (iconRef.current) return iconRef.current.offsetTop + iconRef.current.offsetHeight;
    }

    const getToolTipLeft = () => {
        if (iconRef.current && tooltipRef.current) {
            return iconRef.current.offsetLeft + iconRef.current.offsetWidth / 2 - tooltipRef.current.offsetWidth / 2;
        }
    }

    return (
        <div className="icon-container" style={{ display: "inline-block" }}>
            <a
                ref={iconRef}
                href={href}
                target="_blank"
                rel="noreferrer">
                <img
                    className="icon-image"
                    src={src}
                    alt={alt}
                    style={{ backgroundColor: bGColor }}
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                />
            </a>
            <p
                ref={tooltipRef}
                className="tooltip"
                style={{
                    backgroundColor: "#80b9ff",
                    color: "#000f20",
                    opacity: "0",
                    position: "absolute",
                    fontSize: "14px",
                    textAlign: "center",
                    textShadow: "none",
                    top: getToolTipTop(),
                    left: getToolTipLeft(),
                    padding: "3px 6px",
                    border: "1px solid #80b9ff",
                    borderRadius: "2px"
                }}>
                {alt}
            </p>
        </div>

    );
}

export default Icon;
