import React, { useState, useEffect, RefObject } from 'react';

const BackToTop: React.FC<{ paraContainerRef: RefObject<HTMLDivElement> }> = ({ paraContainerRef }) => {
    const [scrollPos, setScrollPos] = useState(0);
    
    useEffect(() => {
        let refHolder = paraContainerRef.current;

		if (refHolder) {
			refHolder.addEventListener("scroll", () => {
				if (refHolder) setScrollPos(refHolder.scrollTop);
			});
		}

		return () => refHolder?.removeEventListener("scroll", () => { });
	}, [paraContainerRef]);

    return (
        <a
            id="back-to-top"
            href="#welcome"
            className="svg-fill"
            style={{
                position: "fixed",
                bottom: (scrollPos > 1300 ? "35px" : "-50px"),
            }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 16 16">
                <path
                    d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
            </svg>
        </a>
    );
}

export default BackToTop;
