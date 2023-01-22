import React, { useState, useEffect } from 'react';
import Arrow from './Arrow';
import Project from './Project';
import projects from '../utilities/projects';

const NUMBER_OF_PROJECTS = 6;

const ProjectsContainer: React.FC = () => {
    const [bodyWidth, setBodyWidth] = useState(23.75); //rem value
    const [projectIndex, setProjectIndex] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState(1);
    const [touchPositionX, setTouchPositionX] = useState(0);
    const [swiped, setSwiped] = useState(false);

    useEffect(() => {
        let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

        setBodyWidth(document.body.offsetWidth / remValue);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            let remValue = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));

            setBodyWidth(document.body.offsetWidth / remValue);
        });
        return () => window.removeEventListener("resize", () => { });
    }, []);

    useEffect(() => {
        setProjectIndex(0);
        setVisibleProjects(Math.floor(bodyWidth / 21) <= NUMBER_OF_PROJECTS ? Math.floor(bodyWidth / 21) : NUMBER_OF_PROJECTS);
    }, [bodyWidth]);

    const handlePrev = () => {
        if (projectIndex > 0) setProjectIndex((prevValue) => prevValue - 1);
    }

    const handleNext = () => {
        if (projectIndex <= NUMBER_OF_PROJECTS - visibleProjects - 1) setProjectIndex((prevValue) => prevValue + 1);
    }

    const projectVisibility = (projectNumber: number) => {
        if (projectNumber < projectIndex || projectNumber > projectIndex + visibleProjects - 1) {
            return "invisible"
        } else return "visible";
    }

    const handleTouchStart = (event: React.TouchEvent) => {
        setTouchPositionX(event.touches[0].clientX);
        setSwiped(true);
    }

    const handleTouchMove = (event: React.TouchEvent) => {
        if (swiped && (touchPositionX + 80 < event.touches[0].clientX)) {
            setSwiped(false);
            handlePrev();
        } else if (swiped && (touchPositionX - 80 > event.touches[0].clientX)) {
            setSwiped(false);
            handleNext();
        }
    }

    const projectsGap = bodyWidth > 38 ? 3 : 2.5;
    const projectWidth = bodyWidth > 38 ? 16 : 14;
    const arrowPosition = bodyWidth > 23.75
        ? visibleProjects * (projectsGap + projectWidth) / 2
        : 0;

    const containerWidth = bodyWidth > 23.75
        ? projectsGap + visibleProjects * (projectsGap + projectWidth)
        : projectWidth;

    const sliderPosition = bodyWidth > 23.75
        ? projectsGap - projectIndex * (projectsGap + projectWidth)
        : - projectIndex * (projectsGap + projectWidth);

    return (
        <>
            <div
                id="projects-container"
                style={{
                    width: `${containerWidth}rem`
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div
                    id="project-slider"
                    style={{
                        left: `${sliderPosition}rem`
                    }}>
                    {projects.map((item, index) =>
                        <Project
                            key={index}
                            visibilityClass={projectVisibility(index)}
                            title={item.title}
                            techs={item.techs}
                            src={item.src}
                            description={item.description}
                            demoHref={item.demoHref}
                            codeHref={item.codeHref}
                        />
                    )}
                </div>
            </div>
            <div className="navigation-arrows" style={{ display: `${bodyWidth > 23.75 ? "initial" : "none"}` }}>
                <Arrow
                    visibilityClass={projectIndex > 0 ? "visible" : "invisible"}
                    left={arrowPosition * (-1)}
                    mirrored={true}
                    clickHandler={handlePrev}
                />
                <Arrow
                    visibilityClass={projectIndex <= NUMBER_OF_PROJECTS - visibleProjects - 1 ? "visible" : "invisible"}
                    left={arrowPosition}
                    mirrored={false}
                    clickHandler={handleNext}
                />
            </div>
            <div className="slider-dots-container">
                <div
                    className="marker-dot"
                    style={{
                        transform: `translateX(${projectIndex * (bodyWidth > 38 ? 1.5 : 1.125)}rem)`
                    }}
                />
                {[...Array(NUMBER_OF_PROJECTS - visibleProjects + 1)].map((item, index) => index).map(item =>
                    <div
                        key={item}
                        className="slider-dot"
                        onClick={() => setProjectIndex(item)}
                    />
                )}
            </div>
        </>
    );
}

export default ProjectsContainer;