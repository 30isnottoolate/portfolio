import icons from '../utilities/icons';

const codeLabel = "</>";

interface ProjectProps {
    visibilityClass: string;
    title: string;
    techs: string[];
    src: string;
    description: string;
    demoHref: string;
    codeHref: string;
}

const Project: React.FC<ProjectProps> = ({ 
    visibilityClass, title, techs, src, description, demoHref, codeHref 
}: ProjectProps) => {

    const generateTechIcons = () => {
        let techIcons: string = "";
        for (let i = 0; i < techs.length; i++) {
            let currentIndex: string = techs[i];
            techIcons = techIcons + `<svg class="svg-fill" viewBox="0 0 128 128">${icons[currentIndex as keyof typeof icons].path}</svg>`
        }
        return techIcons;
    }

    return (
        <div className={`project-box ${visibilityClass}`} >
            <p className="project-title">{title}</p>
            <div className="project-techs" dangerouslySetInnerHTML={{ __html: generateTechIcons() }} />
            <img className="project-img" src={src} alt={title} />
            <p className="project-description">{description} </p>
            <div className="project-buttons">
                <a className="project-button project-demo-button" style={{ display: `${visibilityClass === "invisible" ? "none" : ""}` }} href={demoHref} target="_blank" rel="noreferrer" >Demo</a>
                <a className="project-button project-code-button" style={{ display: `${visibilityClass === "invisible" ? "none" : ""}` }} href={codeHref} target="_blank" rel="noreferrer" >{codeLabel}</a>
            </div>
        </div>
    );
}

export default Project;
