import React, { useRef } from 'react';
import icons from '../utilities/icons';

const Icon: React.FC<{ href: string, iconType: string }> = ({ href, iconType }) => {
    const tooltipRef = useRef<HTMLParagraphElement>(null);

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
                    onMouseEnter={() => {if (tooltipRef.current) tooltipRef.current.style.opacity = "1"}}
                    onMouseLeave={() => {if (tooltipRef.current) tooltipRef.current.style.opacity = "0"}}
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
        </div>

    );
}

export default Icon;
