import React, { useState } from 'react';

interface LazyImageProps {
    className: string;
    src: string;
    alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ className, src, alt }: LazyImageProps) => {
    const [opacity, setOpacity] = useState(0);

    return (
        <div className="lazy-image-container">
            <img
                className={className}
                src={src}
                alt={alt}
                onLoad={() => setOpacity(1)}
                style={{
                    opacity: opacity,
                    transitionDuration: "1s"
                }}
            />
            <div
                className={className}
                style={{
                    zIndex: -1, opacity: opacity === 0 ? 1 : 0,
                    transitionDuration: "2.5s"
                }}
            />
        </div>
    );
}

export default LazyImage;
