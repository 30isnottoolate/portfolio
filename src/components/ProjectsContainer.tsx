import React, { useState, useEffect } from 'react';
import Arrow from './Arrow';
import Project from './Project';

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

        if (83 > bodyWidth && bodyWidth >= 64.5) setVisibleProjects(3);
        else if (64.5 > bodyWidth && bodyWidth >= 46) setVisibleProjects(2);
        else if (bodyWidth < 46) setVisibleProjects(1);
        else setVisibleProjects(4);
    }, [bodyWidth]);

    const handlePrev = () => {
        if (projectIndex > 0) setProjectIndex((prevValue) => prevValue - 1);
    }

    const handleNext = () => {
        if (projectIndex <= NUMBER_OF_PROJECTS - visibleProjects - 1) setProjectIndex((prevValue) => prevValue + 1);
    }

    const projectVisibility = (projectNumber: number) => {
        if (projectNumber >= projectIndex && ((projectIndex + visibleProjects + 1) > projectNumber)) {
            return "visible"
        } else return "invisible";
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
    const projectWidth = bodyWidth > 38 ? 15.5 : 13;
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
                    <Project
                        visibilityClass={projectVisibility(1)}
                        title={"Stage Teleprompter"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/stage-teleprompter-screenshot.png"
                        description="The first project that will actually be used IRL. A musician friend of mine commissioned me to make an app, which will be used in a stage teleprompter for musicians and public speakers. Originally made with class components, now rewritten with functional comps and hooks."
                        demoHref="https://30isnottoolate.github.io/stage-teleprompter-hooked-ts"
                        codeHref="https://github.com/30isnottoolate/stage-teleprompter-hooked-ts"
                    />
                    <Project
                        visibilityClass={projectVisibility(2)}
                        title={"Library Manager"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/teleprompter-library-manager-screenshot.png"
                        description="A utility application for the Stage Teleprompter, used for creating and editing JSON files read by the teleprompter app. You can highlight selected parts of the text with various colors. It will eventually be turned into a multiplatform desktop app with Electron."
                        demoHref="https://30isnottoolate.github.io/teleprompter-library-manager"
                        codeHref="https://github.com/30isnottoolate/teleprompter-library-manager"
                    />
                    <Project
                        visibilityClass={projectVisibility(3)}
                        title={"Portfolio Page"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/portfolio-screenshot.png"
                        description="The title says it all. It's my porfolio page. You are currently looking at it. A visual representation of my work, full of SVG images, animations, daring color schemes. Made with React functional components and hooks, written in TypeScript. The projects section is touch swipe compatible."
                        demoHref="https://30isnottoolate.github.io/portfolio"
                        codeHref="https://github.com/30isnottoolate/portfolio"
                    />
                    <Project
                        visibilityClass={projectVisibility(4)}
                        title={"Online Teleprompter"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/online-teleprompter-screenshot.png"
                        description="The idea has come from the Stage Teleprompter project, but with much less features. This is the first app I've made with React hooks and TypeScript. It has a simple user interface, just a pure learning app. A formula was developed for the ideal text sliding speed after a lot of experiments."
                        demoHref="https://30isnottoolate.github.io/online-teleprompter-ts"
                        codeHref="https://github.com/30isnottoolate/online-teleprompter-ts"
                    />
                    <Project
                        visibilityClass={projectVisibility(5)}
                        title={"Coming soon..."}
                        techs={["js", "ts", "react"]}
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
                        description="Some text here..."
                        demoHref="https://www.solidbackgrounds.com"
                        codeHref="https://www.solidbackgrounds.com"
                    />
                    <Project
                        visibilityClass={projectVisibility(6)}
                        title={"Coming soon..."}
                        techs={["js", "ts", "react"]}
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
                        description="Some text here..."
                        demoHref="https://www.solidbackgrounds.com"
                        codeHref="https://www.solidbackgrounds.com"
                    />
                </div>
            </div>
            <div className="navigation-arrows" style={{display: `${bodyWidth > 23.75 ? "initial": "none"}`}}> 
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