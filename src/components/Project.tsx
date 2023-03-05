import icons from '../utilities/icons';

interface ProjectProps {
    visibilityClass: string;
    title: string;
    techs: string[];
    src: string;
    description: React.ReactElement;
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
                {techs.map((item, index) => (
                    <svg
                        key={index}
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
                href={demoHref}
                target="_blank"
                rel="noreferrer" >
                Demo
            </a>
            <a
                className="project-button project-code-button"
                href={codeHref}
                target="_blank"
                rel="noreferrer" >
                {`</>`}
            </a>
        </div>
    );
}

export default Project;
