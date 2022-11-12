import React, { useState, useEffect, RefObject } from 'react';

const Gear: React.FC<{ changeTheme: () => void, paraContainerRef: RefObject<HTMLDivElement> }> = ({ changeTheme, paraContainerRef }) => {
    const [bodyWidth, setBodyWidth] = useState(380);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        setBodyWidth(document.body.offsetWidth);
    }, [])

    useEffect(() => {
		window.addEventListener("resize", () => {
			setBodyWidth(document.body.offsetWidth);
		});
		return () => window.removeEventListener("resize", () => { });
	}, []);

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
        <svg
            id="gear"
            className="svg-stroke"
            onClick={changeTheme}
            style={{
                transform: `rotate(${scrollPos / ((bodyWidth <= 650 ? 36 : 45) * Math.PI / 360)}deg)`
            }}
            viewBox="0 0 1000 1000">
            <path
                fill="none" strokeWidth="30"
                d="M 641.66,550.00
                C 641.45,550.60 641.17,551.40 640.95,552.00
                    633.75,571.64 623.94,586.24 610.42,602.00
                    599.15,615.14 582.44,626.53 567.00,634.25
                    561.30,637.10 555.59,639.54 550.00,641.55
                    550.00,650.00 550.00,836.75 550.01,846.44
                    566.81,844.10 583.70,840.49 601.00,835.28
                    702.03,804.85 785.83,729.35 824.80,631.00
                    835.41,604.22 842.39,577.73 846.29,550.01
                    828.75,550.00 653.08,550.00 641.66,550.00 Z
                M 450.00,641.64
                C 405.83,626.72 373.31,591.58 358.56,550.00
                    333.75,550.00 160.13,550.00 153.61,550.00
                    153.65,550.43 153.73,551.00 153.73,551.00
                    166.62,640.45 215.08,723.27 287.00,778.12
                    318.35,802.02 351.64,819.55 389.00,832.00
                    409.27,838.76 429.31,843.40 450.00,846.30
                    450.00,821.25 450.00,644.49 450.00,641.64 Z
                M 846.36,449.99
                C 845.45,443.42 844.32,436.60 843.00,430.00
                    815.59,292.91 707.09,184.41 570.00,157.00
                    563.06,155.61 556.36,154.46 550.00,153.55
                    550.00,163.75 550.00,351.25 550.00,358.43
                    554.64,360.04 559.13,361.85 563.00,363.76
                    579.02,371.63 594.36,381.15 606.91,394.04
                    622.69,410.23 634.29,429.28 641.50,450.00
                    657.50,450.00 836.25,450.00 846.36,449.99 Z
                M 153.71,450.00
                C 158.91,413.13 169.55,378.29 186.26,344.00
                    228.47,257.41 306.55,193.45 398.00,165.02
                    414.90,159.77 432.41,156.02 450.00,153.48
                    450.00,156.80 450.00,353.75 450.00,358.34
                    449.41,358.54 448.60,358.83 448.00,359.05
                    408.15,373.66 377.24,403.88 361.01,443.00
                    360.07,445.27 359.14,447.70 358.32,450.00
                    342.50,450.00 157.50,450.00 153.71,450.00 Z
                M 586.97,548.98
                C 500.00,600.00 587.00,549.00 500.00,599.99
                    413.00,549.00 500.00,600.00 413.00,548.99
                    413.00,543.00 413.00,462.00 413.01,451.03
                    500.00,400.00 413.00,451.00 500.00,400.00
                    587.00,451.00 500.00,400.00 586.99,451.00
                    587.00,471.60 586.95,546.00 586.97,548.98 Z
                M 493.00,450.44
                C 535.90,444.94 565.91,492.00 541.64,528.00
                    537.97,533.44 533.44,537.97 528.00,541.64
                    521.46,546.05 514.75,548.35 507.00,549.56
                    501.45,550.43 495.48,550.11 490.00,549.00
                    449.16,540.67 436.08,489.49 467.00,462.18
                    475.02,455.10 482.71,452.34 493.00,450.44 Z
                M 467.47,68.12
                C 467.47,68.12 434.98,6.89 434.98,6.89
                    434.98,6.89 371.22,19.17 371.22,19.17
                    371.22,19.17 364.94,88.69 364.94,88.69
                    364.94,88.69 304.75,113.75 304.75,113.75
                    304.75,113.75 251.27,69.09 251.27,69.09
                    251.27,69.09 197.00,105.62 197.00,105.62
                    197.00,105.62 217.75,171.75 217.75,171.75
                    217.75,171.75 171.50,217.50 171.50,217.50
                    171.50,217.50 104.91,197.64 104.91,197.64
                    104.91,197.64 69.27,250.91 69.27,250.91
                    69.27,250.91 113.27,304.36 113.27,304.36
                    113.27,304.36 88.36,364.73 88.36,364.73
                    88.36,364.73 18.91,371.45 18.91,371.45
                    18.91,371.45 6.91,435.09 6.91,435.09
                    6.91,435.09 68.36,467.64 68.36,467.64
                    68.36,467.64 68.36,532.55 68.36,532.55
                    68.36,532.55 6.55,565.09 6.55,565.09
                    6.55,565.09 18.91,628.73 18.91,628.73
                    18.91,628.73 88.55,635.09 88.55,635.09
                    88.55,635.09 113.50,695.00 113.50,695.00
                    113.50,695.00 68.91,749.09 68.91,749.09
                    68.91,749.09 105.00,802.50 105.00,802.50
                    105.00,802.50 171.45,782.55 171.45,782.55
                    171.45,782.55 217.64,828.36 217.64,828.36
                    217.64,828.36 197.45,894.91 197.45,894.91
                    197.45,894.91 251.09,930.91 251.09,930.91
                    251.09,930.91 304.75,886.25 304.75,886.25
                    304.75,886.25 364.75,911.25 364.75,911.25
                    364.75,911.25 371.25,980.50 371.25,980.50
                    371.25,980.50 434.91,993.27 434.91,993.27
                    434.91,993.27 467.09,931.82 467.09,931.82
                    467.09,931.82 532.91,931.82 532.91,931.82
                    532.91,931.82 565.27,993.09 565.27,993.09
                    565.27,993.09 629.09,980.55 629.09,980.55
                    629.09,980.55 635.00,911.00 635.00,911.00
                    635.00,911.00 695.27,886.36 695.27,886.36
                    695.27,886.36 748.73,930.91 748.73,930.91
                    748.73,930.91 802.91,894.55 802.91,894.55
                    802.91,894.55 782.55,827.64 782.55,827.64
                    782.55,827.64 829.00,782.00 829.00,782.00
                    829.00,782.00 894.73,802.73 894.73,802.73
                    894.73,802.73 930.73,749.45 930.73,749.45
                    930.73,749.45 886.36,694.73 886.36,694.73
                    886.36,694.73 911.64,634.91 911.64,634.91
                    911.64,634.91 980.73,628.55 980.73,628.55
                    980.73,628.55 993.27,565.09 993.27,565.09
                    993.27,565.09 931.82,531.82 931.82,531.82
                    931.82,531.82 932.18,466.91 932.18,466.91
                    932.18,466.91 993.27,434.73 993.27,434.73
                    993.27,434.73 980.70,370.92 980.70,370.91
                    980.71,370.92 911.00,365.00 911.00,365.00
                    911.00,365.00 886.50,304.50 886.50,304.50
                    886.50,304.50 930.75,251.12 930.75,251.12
                    930.75,251.12 894.75,197.00 894.75,197.00
                    894.75,197.00 828.00,217.38 828.00,217.38
                    828.00,217.38 782.00,171.25 782.00,171.25
                    782.00,171.25 802.67,105.67 802.67,105.67
                    802.67,105.67 748.75,69.38 748.75,69.38
                    748.75,69.38 695.25,113.25 695.25,113.25
                    695.25,113.25 635.25,88.38 635.25,88.38
                    635.25,88.38 628.75,19.38 628.75,19.38
                    628.75,19.38 565.12,6.62 565.12,6.62
                    565.12,6.62 532.69,68.00 532.69,68.00
                    532.69,68.00 467.47,68.12 467.47,68.12 Z" />
        </svg>
    );
}

export default Gear;
