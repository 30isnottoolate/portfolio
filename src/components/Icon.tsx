import React, { useState, useRef, useEffect } from 'react';
import icons from '../utilities/icons';

const Icon: React.FC<{href: string, iconType: string}> = ({href, iconType}) => {
    const [tooltipPos, setTooltipPos] = useState({left: 0, top: 0})

    const iconRef = useRef<HTMLAnchorElement>(null);
    const tooltipRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setTooltipPos({left: getToolTipLeft(), top: getToolTipTop()});
    }, []);

    useEffect(() => {
        window.addEventListener("load", () => {
            setTooltipPos({left: getToolTipLeft(), top: getToolTipTop()});
        });

        return () => window.removeEventListener("load", () => { });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setTooltipPos({left: getToolTipLeft(), top: getToolTipTop()});
        });

        return () => window.removeEventListener("resize", () => { });
    }, []);

    const handleHoverStart = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "1";
    }

    const handleHoverEnd = () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
    }

    const getToolTipLeft = () => {
        return iconRef.current && tooltipRef.current ? 
        (iconRef.current.offsetLeft + iconRef.current.offsetWidth / 2 - tooltipRef.current.offsetWidth / 2) : 0;
    }

    const getToolTipTop = () => {
        return iconRef.current ? (iconRef.current.offsetTop + iconRef.current.offsetHeight + 5) : 0;
    }

    return (
        <div className="icon-container">
            <a
                ref={iconRef}
                href={href}
                target="_blank"
                rel="noreferrer" >
                <svg
                    className="icon-image svg-fill"
                    viewBox="0 0 128 128"
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                    dangerouslySetInnerHTML={{ __html: icons[iconType as keyof typeof icons].path }}
                />
            </a>
            <span
                ref={tooltipRef}
                className="icon-tooltip"
                style={{
                    left: tooltipPos.left,
                    top: tooltipPos.top
                }}>
                {icons[iconType as keyof typeof icons].iconText}
            </span>
        </div>

    );
}

export default Icon;
