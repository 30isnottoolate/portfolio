import React, { RefObject, useState, useRef, useCallback, useEffect } from 'react';
import figures from '../utilities/figures';

const Background: React.FC<{ givenID: string, contentRef: RefObject<HTMLDivElement> }> = ({ givenID, contentRef }) => {
    const [wallpaper, setWallpaper] = useState("");

    const delayTimer = useRef(setTimeout(() => { }));

    const generateBackground = useCallback((contentWidth: number, contentHeight: number) => {
        let backgroundContent = "";
        let blockSide = contentWidth > 650 ? 200 : contentWidth > 300 ? 200 : 100; // 1 figure inside every (blockSide x blockSide) block

        const figurePosition = (position: number, contentWidthOrHeight: number) => {
            return contentWidthOrHeight / Math.floor(contentWidthOrHeight / blockSide) * (position + Math.random());
        };

        for (let x = 0; x < Math.floor(contentWidth / blockSide); x++) {
            for (let y = 0; y < Math.floor(contentHeight / blockSide); y++) {
                backgroundContent = backgroundContent + `<svg xmlns="http://www.w3.org/2000/svg" class="figures" style="position: absolute; left: ${figurePosition(x, contentWidth)}px; top: ${figurePosition(y, contentHeight)}px;" width="16" height="16" viewBox="0 0 16 16">${figures[Math.floor(Math.random() * 5)]}</svg>`;
            }
        }

        return backgroundContent;
    }, []);

    const updateBackground = useCallback(() => {
        clearTimeout(delayTimer.current);

        delayTimer.current = setTimeout(() => {
            if (contentRef.current) setWallpaper(generateBackground(contentRef.current.offsetWidth, contentRef.current.offsetHeight));
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
            dangerouslySetInnerHTML={{ __html: wallpaper }}
        />
    )
}

export default Background;
