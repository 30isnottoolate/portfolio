import React, { useRef } from 'react';
import icons from '../utilities/icons';

interface IconProps {
    href: string;
    isItDark: boolean;
    iconType: string;
}

const Icon: React.FC<IconProps> = ({href, isItDark, iconType}: IconProps) => {
    const iconRef = useRef<HTMLAnchorElement>(null);
    const tooltipRef = useRef<HTMLParagraphElement>(null);

    const handleHoverStart = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "1";
    }

    const handleHoverEnd = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
    }

    const getToolTipTop = () => {
        if (iconRef.current) return iconRef.current.offsetTop + iconRef.current.offsetHeight + 5;
    }

    const getToolTipLeft = () => {
        if (iconRef.current && tooltipRef.current) {
            return iconRef.current.offsetLeft + iconRef.current.offsetWidth / 2 - tooltipRef.current.offsetWidth / 2;
        }
    }

    const svgFillTheme = () => isItDark ? "dark-svg-fill" : "light-svg-fill";
	const tooltipTheme = () => isItDark ? "dark-icon-tooltip" : "light-icon-tooltip";

    return (
        <div className="icon-container">
            <a
                ref={iconRef}
                href={href}
                target="_blank"
                rel="noreferrer" >
                <svg
                    className={`icon-image ${svgFillTheme()}`}
                    viewBox="0 0 128 128"
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                    dangerouslySetInnerHTML={{ __html: icons[iconType as keyof typeof icons].path }}
                />
            </a>
            <span
                ref={tooltipRef}
                className={`icon-tooltip ${tooltipTheme()}`}
                style={{
                    top: getToolTipTop(),
                    left: getToolTipLeft(),
                }}>
                {icons[iconType as keyof typeof icons].iconText}
            </span>
        </div>

    );
}

export default Icon;
