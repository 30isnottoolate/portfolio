const techBase = {
    html: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
    css: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
    js: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    ts: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    react: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    nodejs: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "NodeJS" },
    expressjs: { src: "https://expressjs.com/images/favicon.png", alt: "ExpressJS" },
    mongodb: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" }
}

const codeLabel = "</>";

interface ProjectProps {
    classTheme: string;
    projectVisibility: string;
    title: string;
    techs: string[];
    src: string;
    description: string;
    demoHref: string;
    codeHref: string;
}

const Project: React.FC<ProjectProps> = ({ classTheme, projectVisibility, title, techs, src, description, demoHref, codeHref }: ProjectProps) => {

    const generateTechIcons = () => {
        let techIcons: string = "";
        for (let i = 0; i < techs.length; i++) {
            let currentIndex: string = techs[i];
            techIcons = techIcons + `<img src=${techBase[currentIndex as keyof typeof techBase].src} alt=${techBase[currentIndex as keyof typeof techBase].alt}/>`;
        }
        return techIcons;
    }

    return (
        <div className={`project-box ${projectVisibility} ${classTheme}`} >
            <p className="project-title">{title}</p>
            <div className="project-techs" dangerouslySetInnerHTML={{ __html: generateTechIcons() }} />
            <img className="project-img" src={src} alt={title} />
            <p className="project-description">{description} </p>
            <div className="project-buttons">
                <a className="project-demo-button" style={{ display: `${projectVisibility === "invisible" ? "none" : ""}` }} href={demoHref} target="_blank" rel="noreferrer" >Demo</a>
                <a className="project-code-button" style={{ display: `${projectVisibility === "invisible" ? "none" : ""}` }} href={codeHref} target="_blank" rel="noreferrer" >{codeLabel}</a>
            </div>
        </div>
    );
}

export default Project;
