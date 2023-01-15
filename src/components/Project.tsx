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

    return (
        <div className={`project-box ${visibilityClass}`} >
            <h3 className="project-title">{title}</h3>
            <div className="project-techs">
                {techs.map(item => (
                    <svg
                        key={`${item}${title.charCodeAt(0) * description.charCodeAt(0)}`}
                        className="svg-fill"
                        viewBox="0 0 128 128"
                    >
                        {icons[item as keyof typeof icons].path}
                    </svg>
                ))}
            </div>
            <img className="project-img" src={src} alt={title} />
            <p className="project-description">{description} </p>
            <a
                className="project-button project-demo-button"
                style={{ display: `${visibilityClass === "invisible" ? "none" : ""}` }}
                href={demoHref}
                target="_blank"
                rel="noreferrer" >
                Demo
            </a>
            <a
                className="project-button project-code-button"
                style={{ display: `${visibilityClass === "invisible" ? "none" : ""}` }}
                href={codeHref}
                target="_blank"
                rel="noreferrer" >
                {codeLabel}
            </a>
        </div>
    );
}

export default Project;
