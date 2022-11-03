import icons from '../utilities/icons';

const codeLabel = "</>";

interface ProjectProps {
    themeClass: string;
    visibilityClass: string;
    title: string;
    techs: string[];
    svgFillClass: string;
    src: string;
    description: string;
    buttonThemeClass: string
    demoHref: string;
    codeHref: string;
}

const Project: React.FC<ProjectProps> = ({ 
    themeClass, visibilityClass, title, techs, svgFillClass, src, description, buttonThemeClass, demoHref, codeHref 
}: ProjectProps) => {

    const generateTechIcons = () => {
        let techIcons: string = "";
        for (let i = 0; i < techs.length; i++) {
            let currentIndex: string = techs[i];
            techIcons = techIcons + `<svg class=${svgFillClass} viewBox="0 0 128 128">${icons[currentIndex as keyof typeof icons].path}</svg>`
        }
        return techIcons;
    }

    return (
        <div className={`project-box ${visibilityClass} ${themeClass}`} >
            <p className="project-title">{title}</p>
            <div className="project-techs" dangerouslySetInnerHTML={{ __html: generateTechIcons() }} />
            <img className="project-img" src={src} alt={title} />
            <p className="project-description">{description} </p>
            <div className="project-buttons">
                <a className={`project-demo-button ${buttonThemeClass}`} style={{ display: `${visibilityClass === "invisible" ? "none" : ""}` }} href={demoHref} target="_blank" rel="noreferrer" >Demo</a>
                <a className={`project-code-button ${buttonThemeClass}`} style={{ display: `${visibilityClass === "invisible" ? "none" : ""}` }} href={codeHref} target="_blank" rel="noreferrer" >{codeLabel}</a>
            </div>
        </div>
    );
}

export default Project;
