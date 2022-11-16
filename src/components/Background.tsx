import React, { RefObject, useState, useRef, useCallback, useEffect } from 'react';
import figures from '../utilities/figures';

const Background: React.FC<{ givenID: string, contentRef: RefObject<HTMLDivElement> }> = ({ givenID, contentRef }) => {
    const [wallpaper, setWallpaper] = useState([{ picture: 0, left: 0, top: 0 }]);

    const delayTimer = useRef(setTimeout(() => { }));

    const generateBackground = useCallback((contentWidth: number, contentHeight: number) => {
        let pictures = [];
        let blockSide = contentWidth > 650 ? 200 : contentWidth > 300 ? 200 : 100; // 1 figure inside every (blockSide x blockSide) block

        const figurePosition = (position: number, contentWidthOrHeight: number) => {
            return contentWidthOrHeight / Math.floor(contentWidthOrHeight / blockSide) * (position + Math.random());
        };

        for (let x = 0; x < Math.floor(contentWidth / blockSide); x++) {
            for (let y = 0; y < Math.floor(contentHeight / blockSide); y++) {
                pictures.push({ picture: Math.floor(Math.random() * 5), left: figurePosition(x, contentWidth), top: figurePosition(y, contentHeight) });
            }
        }

        setWallpaper(pictures);
    }, []);

    const updateBackground = useCallback(() => {
        clearTimeout(delayTimer.current);

        delayTimer.current = setTimeout(() => {
            if (contentRef.current) generateBackground(contentRef.current.offsetWidth, contentRef.current.offsetHeight);
        }, 500);
    }, [contentRef, generateBackground]);

    useEffect(() => {
        updateBackground();
    }, [updateBackground]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            updateBackground();
        });

        return () => { window.removeEventListener("resize", () => { }) }
    }, [updateBackground]);

    return (
        <div
            id={givenID}
            className="background"
            style={{
                left: 0,
                top: 0,
                width: contentRef.current ? contentRef.current.offsetWidth : 0,
                height: contentRef.current ? contentRef.current.offsetHeight * 0.75 : 0
            }}
        >
            {wallpaper.map(item => (
                <svg
                    key={wallpaper.indexOf(item)}
                    className="figures"
                    style={{
                        left: wallpaper[wallpaper.indexOf(item)].left,
                        top: wallpaper[wallpaper.indexOf(item)].top
                    }}
                >
                    {figures[item.picture]}
                </svg>
            ))}
        </div>
    );
}

export default Background;
