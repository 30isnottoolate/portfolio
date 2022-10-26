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
        <div className="icon-container">
            <a
                ref={iconRef}
                href={href}
                target="_blank"
                rel="noreferrer" >
                <img
                    className="icon-image"
                    src={src}
                    alt={alt}
                    style={{ backgroundColor: bGColor }}
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                />
            </a>
            <span
                ref={tooltipRef}
                className="icon-tooltip"
                style={{
                    top: getToolTipTop(),
                    left: getToolTipLeft()
                }}>
                {alt}
            </span>
        </div>

    );
}

export default Icon;
