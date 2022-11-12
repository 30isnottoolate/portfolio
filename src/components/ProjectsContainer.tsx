import React, {useState, useEffect} from 'react';
import Arrow from './Arrow';
import Project from './Project';

const NUMBER_OF_PROJECTS = 6;

const ProjectsContainer: React.FC<{isItDark: boolean}> = ({isItDark}) => {
    const [bodyWidth, setBodyWidth] = useState(380);
	const [projectIndex, setProjectIndex] = useState(1);
	const [visibleProjects, setVisibleProjects] = useState(1);
	const [touchPosX, setTouchPosX] = useState(0);
	const [swiped, setSwiped] = useState(false);

    useEffect(() => {
        setBodyWidth(document.body.offsetWidth);
    }, [])

    useEffect(() => {
		window.addEventListener("resize", () => {
			setBodyWidth(document.body.offsetWidth);
		});
		return () => window.removeEventListener("resize", () => { });
	}, []);

    useEffect(() => {
		setProjectIndex(1);
		if (bodyWidth < 1400 && bodyWidth >= 1100) setVisibleProjects(3);
		else if (bodyWidth < 1100 && bodyWidth >= 750) setVisibleProjects(2);
		else if (bodyWidth < 750) setVisibleProjects(1);
		else setVisibleProjects(4);
	}, [bodyWidth]);

    const handlePrev = () => {
		if (projectIndex > 1) setProjectIndex((prevValue) => prevValue - 1);
	}

	const handleNext = () => {
		if (projectIndex <= NUMBER_OF_PROJECTS - visibleProjects) setProjectIndex((prevValue) => prevValue + 1);
	}

	const projectVisibility = (projectNumber: number) => {
		if (projectNumber >= projectIndex && ((projectIndex + visibleProjects) > projectNumber)) {
			return "visible"
		} else return "invisible";
	}

	const handleTouchStart = (event: React.TouchEvent) => {
		setTouchPosX(event.touches[0].clientX);
		setSwiped(true);
	}

	const handleTouchMove = (event: React.TouchEvent) => {
		if (swiped && (touchPosX + 80 < event.touches[0].clientX)) {
			setSwiped(false);
			handlePrev();
		} else if (swiped && (touchPosX - 80 > event.touches[0].clientX)) {
			setSwiped(false);
			handleNext();
		}
	}

	const svgFillTheme = () => isItDark ? "dark-svg-fill" : "light-svg-fill";
	const projectBoxTheme = () => isItDark ? "dark-project-box" : "light-project-box";
	const projectButtonTheme = () => isItDark ? "dark-button" : "light-button";

    return (
        <>
            <div id="project-index-buttons" style={{ height: (bodyWidth <= 650 ? 48 : 60) }}>
                <Arrow
                    visibilityClass={projectIndex > 1 ? "visible" : "invisible"}
                    posX={(-visibleProjects * (bodyWidth <= 650 ? 230 : 300) / 2)}
                    posY={(bodyWidth <= 650 ? 238 : 297.5)}
                    mirrored={true}
                    clickHandler={handlePrev}
                />
                <Arrow
                    visibilityClass={projectIndex <= NUMBER_OF_PROJECTS - visibleProjects ? "visible" : "invisible"}
                    posX={(visibleProjects * (bodyWidth <= 650 ? 230 : 300) / 2)}
                    posY={(bodyWidth <= 650 ? 238 : 297.5)}
                    mirrored={false}
                    clickHandler={handleNext}
                />
            </div>
            <div
                id="projects-container"
                style={{
                    width: (visibleProjects * (bodyWidth <= 650 ? 240 : 300) + (bodyWidth <= 650 ? 60 : 100))
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div
                    id="project-slider"
                    style={{
                        left: ((projectIndex - 1) * (-(bodyWidth <= 650 ? 240 : 300))) + (bodyWidth <= 650 ? 50 : 75)
                    }}>
                    <Project
                        themeClass={projectBoxTheme()}
                        visibilityClass={projectVisibility(1)}
                        title={"Online Teleprompter"}
                        techs={["react", "ts", "css", "html"]}
                        svgFillClass={svgFillTheme()}
                        src="./images/project_screenshots/online-teleprompter-screenshot.png"
                        description="The idea has come from the stage teleprompter project, but with much less features. This is the first app I've made with React hooks (useState, useEffect, useRef), and TypeScript. It has a simple user interface, nothing flashy, just a pure learning app. A formula was developed for the ideal text sliding speed after a lot of experiments."
                        buttonThemeClass={projectButtonTheme()}
                        demoHref="https://30isnottoolate.github.io/online-teleprompter-ts"
                        codeHref="https://github.com/30isnottoolate/online-teleprompter-ts"
                    />
                    <Project
                        themeClass={projectBoxTheme()}
                        visibilityClass={projectVisibility(2)}
                        title={"Stage Teleprompter"}
                        techs={["react", "js", "css", "html"]}
                        svgFillClass={svgFillTheme()}
                        src="./images/project_screenshots/stage-teleprompter-screenshot.png"
                        description="The first project that will actually be used IRL. A musician friend of mine commissioned me to make an app, which will be used in a stage teleprompter box for musicians and public speakers, and controlled with a three-button footswitch. It's made with class components, and will eventually be turned into a desktop app with Electron."
                        buttonThemeClass={projectButtonTheme()}
                        demoHref="https://30isnottoolate.github.io/stage-teleprompter"
                        codeHref="https://github.com/30isnottoolate/stage-teleprompter"
                    />
                    <Project
                        themeClass={projectBoxTheme()}
                        visibilityClass={projectVisibility(3)}
                        title={"Portfolio Page"}
                        techs={["react", "ts", "css", "html"]}
                        svgFillClass={svgFillTheme()}
                        src="./images/project_screenshots/portfolio-screenshot.png"
                        description="The title says it all. It's my porfolio page. You are currently looking at it. A visual representation of my work, full of SVG images, animations, daring color schemes. Made with React functional components and hooks, written in TypeScript. The projects section is touch swipe compatible. Also, try clicking the gear in the top left corner."
                        buttonThemeClass={projectButtonTheme()}
                        demoHref="https://30isnottoolate.github.io/portfolio"
                        codeHref="https://github.com/30isnottoolate/portfolio"
                    />
                    <Project
                        themeClass={projectBoxTheme()}
                        visibilityClass={projectVisibility(4)}
                        title={"Coming soon..."}
                        techs={["js", "ts", "react"]}
                        svgFillClass={svgFillTheme()}
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
                        description="Some text here..."
                        buttonThemeClass={projectButtonTheme()}
                        demoHref="https://www.solidbackgrounds.com"
                        codeHref="https://www.solidbackgrounds.com"
                    />
                    <Project
                        themeClass={projectBoxTheme()}
                        visibilityClass={projectVisibility(5)}
                        title={"Coming soon..."}
                        techs={["js", "ts", "react"]}
                        svgFillClass={svgFillTheme()}
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
                        description="Some text here..."
                        buttonThemeClass={projectButtonTheme()}
                        demoHref="https://www.solidbackgrounds.com"
                        codeHref="https://www.solidbackgrounds.com"
                    />
                    <Project
                        themeClass={projectBoxTheme()}
                        visibilityClass={projectVisibility(6)}
                        title={"Coming soon..."}
                        techs={["js", "ts", "react"]}
                        svgFillClass={svgFillTheme()}
                        src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
                        description="Some text here..."
                        buttonThemeClass={projectButtonTheme()}
                        demoHref="https://www.solidbackgrounds.com"
                        codeHref="https://www.solidbackgrounds.com"
                    />
                </div>
            </div>
        </>
    );
}

export default ProjectsContainer;