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
                    <Project
                        visibilityClass={projectVisibility(0)}
                        title={"Stage Teleprompter"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/stage-teleprompter-screenshot.png"
                        description={<>A musician friend of mine commissioned me to make this app, which will be used in a stage teleprompter for musicians and public speakers. My first project that is actually being used IRL. Originally made with class components, now rewritten with React hooks.</>}
                        demoHref="https://30isnottoolate.github.io/stage-teleprompter-hooked-ts"
                        codeHref="https://github.com/30isnottoolate/stage-teleprompter-hooked-ts"
                    />
                    <Project
                        visibilityClass={projectVisibility(1)}
                        title={"Library Manager"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/teleprompter-library-manager-screenshot.png"
                        description={<>This is a utility application for the Stage Teleprompter project. You can create texts, format them, highlight selected parts with various colors, and change their order to your liking. <br/>It will eventually be turned into a multiplatform application with Electron.</>}
                        demoHref="https://30isnottoolate.github.io/teleprompter-library-manager"
                        codeHref="https://github.com/30isnottoolate/teleprompter-library-manager"
                    />
                    <Project
                        visibilityClass={projectVisibility(2)}
                        title={"Portfolio Page"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/portfolio-screenshot.png"
                        description={<>The title says it all. It's my porfolio page. You are looking at it. A visual portrayal of my work, full of SVG images, animations, daring color schemes and a swipeable projects section. It's made with React hooks and functional components in TypeScript.</>}
                        demoHref="https://30isnottoolate.github.io/portfolio"
                        codeHref="https://github.com/30isnottoolate/portfolio"
                    />
                    <Project
                        visibilityClass={projectVisibility(3)}
                        title={"Online Teleprompter"}
                        techs={["react", "ts", "css", "html"]}
                        src="./images/project_screenshots/online-teleprompter-screenshot.png"
                        description={<>The idea has come from the Stage Teleprompter project, but this one has less features. It is the first app I've made with React hooks and TypeScript. It has a simple, easy-to-use UI. <br/>A formula was developed for the ideal text sliding speed after a lot of experiments.</>}
                        demoHref="https://30isnottoolate.github.io/online-teleprompter-ts"
                        codeHref="https://github.com/30isnottoolate/online-teleprompter-ts"
                    />
                    <Project
                        visibilityClass={projectVisibility(4)}
                        title={"Coming soon..."}
                        techs={["js", "ts", "react"]}
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
                        description={<>Some text here...</>}
                        demoHref="https://www.solidbackgrounds.com"
                        codeHref="https://www.solidbackgrounds.com"
                    />
                    <Project
                        visibilityClass={projectVisibility(5)}
                        title={"Coming soon..."}
                        techs={["js", "ts", "react"]}
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
                        description={<>Some text here...</>}
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