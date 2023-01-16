import React, { useRef } from 'react';
import icons from '../utilities/icons';

const Icon: React.FC<{ href: string, iconType: string }> = ({ href, iconType }) => {
    const tooltipRef = useRef<HTMLParagraphElement>(null);
    const tooltipArrowRef = useRef<SVGSVGElement>(null);

    const handleMouseEnter = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "1"
        if (tooltipArrowRef.current) tooltipArrowRef.current.style.opacity = "1"
    }

    const handleMouseLeave = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "0"
        if (tooltipArrowRef.current) tooltipArrowRef.current.style.opacity = "0"
    }

    return (
        <div className="icon-container">
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                <svg
                    className="icon-image svg-fill"
                    viewBox="0 0 128 128"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {icons[iconType as keyof typeof icons].path}
                </svg>
            </a>
            <p
                ref={tooltipRef}
                className="icon-tooltip"
                >
                {icons[iconType as keyof typeof icons].iconText}
            </p>
            <svg
                ref={tooltipArrowRef}
                className="icon-tooltip-arrow"
                viewBox="0 0 10 5">
                <polygon points="5,0 10,5 0,5" />
            </svg>
        </div>

    );
}

export default Icon;
