import { useEffect, useState } from "react"

const Background: React.FC<{themeClass: string}> = ({themeClass}) => {
    const [elements, setElements] = useState("");

    useEffect(() => {
        setElements(() => {
            let sum = "";
            for (let i = 0; i < 50; i++) {
                sum = sum + `<div 
                style="
                    display: inline-block;
                    position: absolute; 
                    left: ${Math.random() * document.body.offsetWidth}px; 
                    top: ${Math.random() * document.body.offsetHeight}px; 
                    width: 5px; 
                    height: 5px" >
                </div>`;
            }
            return sum;
        })
    }, []);

    return (
        <div className={themeClass} style={{ position: "absolute", zIndex: -10, left: 0, top: 0, width: document.body.offsetWidth, height: document.body.offsetHeight }} dangerouslySetInnerHTML={{ __html: elements }} />
    )
}

export default Background;
