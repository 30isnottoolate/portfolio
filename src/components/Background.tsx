import React, { useState, useCallback, useEffect, RefObject } from "react"

const figures = [
    /*nut*/'<path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z"/><path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z"/>',
    /*bulb*/'<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>',
    /*bug*/'<path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>',
    /*sun*/'<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>',
    /*eye*/'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>'
];

const Background: React.FC<{ themeClass: string, contentRef: RefObject<HTMLDivElement> }> = ({ themeClass, contentRef }) => {
    const [decor, setDecor] = useState("");

    const generateBackground = useCallback((contentWidth: number, contentHeight: number) => {
        setDecor(() => {
            let backgroundContent = "";
            let squareSide = contentWidth <= 650 ? 150 : contentWidth <= 300 ? 100 : 200; // 1 figure inside every (squareSide x squareSide) square

            const figurePosition = (position: number, contentWidthOrHeight: number) => {
                return contentWidthOrHeight / Math.floor(contentWidthOrHeight / squareSide) * (position + Math.random());
            };

            if (contentRef.current) {
                for (let x = 0; x < Math.floor(contentWidth / squareSide); x++) {
                    for (let y = 0; y < Math.floor(contentHeight / squareSide); y++) {
                        backgroundContent = backgroundContent + `<svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; left: ${figurePosition(x, contentWidth)}px; top: ${figurePosition(y, contentHeight)}px;" width="16" height="16" viewBox="0 0 16 16">${figures[Math.floor(Math.random() * 5)]}</svg>`;
                    }
                }
            }
            return backgroundContent;
        });
    }, [contentRef]);

    useEffect(() => {
        let refHolder = contentRef.current;

        generateBackground(refHolder ? refHolder.offsetWidth : 0, refHolder ? refHolder.offsetHeight : 0);
    }, [contentRef, generateBackground]);

    useEffect(() => {
        let refHolder = contentRef.current;

        if (refHolder) {
            refHolder.addEventListener("resize", () => {
                generateBackground(refHolder ? refHolder.offsetWidth : 0, refHolder ? refHolder.offsetHeight : 0);
            });
        }
        
        return () => refHolder?.removeEventListener("resize", () => { })
    }, [contentRef, generateBackground]);

    return (
        <div
            className={`${themeClass} background`}
            style={{
                left: 0,
                top: 0,
                width: contentRef.current ? contentRef.current.offsetWidth : 0,
                height: contentRef.current ? contentRef.current.offsetHeight * 0.75 : 0
            }}
            dangerouslySetInnerHTML={{ __html: decor }}
        />
    )
}

export default Background;
