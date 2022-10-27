import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Gear from './Gear';
import MenuButton from './MenuButton';
import BackToTop from './BackToTop';
import Icon from './Icon';
import Project from './Project';
import Arrow from './Arrow';
import Contact from './Contact';

const NUMBER_OF_PROJECTS = 6;
const DARK_THEME = { color: "#80b9ff", secColor: "#a2ccff", bgColor: "#000f20" };
const LIGHT_THEME = { color: "#000f20", secColor: "#002249", bgColor: "#a2ccff" };

const Portfolio: React.FC = () => {
	const [isItDark, setIsItDark] = useState(false);
	const [theme, setTheme] = useState(isItDark ? DARK_THEME : LIGHT_THEME);
	const [viewportWidth, setViewportWidth] = useState(document.body.offsetWidth);
	const [isMenuVisible, setIsMenuVisible] = useState(viewportWidth <= 650 ? false : true);
	const [scrollPos, setScrollPos] = useState(document.body.scrollTop);
	const [projectIndex, setProjectIndex] = useState(1);
	const [visibleProjects, setVisibleProjects] = useState(() => {
		if (document.body.offsetWidth < 1400 && document.body.offsetWidth >= 1100) return 3;
		else if (document.body.offsetWidth < 1100 && document.body.offsetWidth >= 700) return 2;
		else if (document.body.offsetWidth < 700) return 1;
		else return 4;
	});
	const [touchPosX, setTouchPosX] = useState(0);
	const [swiped, setSwiped] = useState(false);

	useEffect(() => {
		if (isItDark) {
			setTheme(DARK_THEME);
		} else setTheme(LIGHT_THEME);
	}, [isItDark]);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setViewportWidth(document.body.offsetWidth);
		});
		return () => window.removeEventListener("resize", () => { });
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollPos(window.scrollY);
		});
		return () => window.removeEventListener("scroll", () => { });
	}, []);

	useEffect(() => {
		setProjectIndex(1);
		setIsMenuVisible(viewportWidth <= 650 ? false : true);
		if (viewportWidth < 1400 && viewportWidth >= 1100) setVisibleProjects(3);
		else if (viewportWidth < 1100 && viewportWidth >= 750) setVisibleProjects(2);
		else if (viewportWidth < 750) setVisibleProjects(1);
		else setVisibleProjects(4);
	}, [viewportWidth]);

	const changeTheme = () => {
		setIsItDark((prevValue) => !prevValue);
	}

	const handleMenuClick = () => {
		setIsMenuVisible((prevValue) => !prevValue);
	}

	const handlePrev = () => {
		if (projectIndex > 1) {
			setProjectIndex((prev) => prev - 1);
		}
	}

	const handleNext = () => {
		if (projectIndex <= NUMBER_OF_PROJECTS - visibleProjects) {
			setProjectIndex((prev) => prev + 1);
		}
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
		if (swiped && (touchPosX + 120 < event.touches[0].clientX)) {
			setSwiped(false);
			handlePrev();
		} else if (swiped && (touchPosX - 120 > event.touches[0].clientX)) {
			setSwiped(false);
			handleNext();
		}
	}

	return (
		<div id="portfolio">
			<header className={isItDark ? "dark-header-footer" : "light-header-footer"} >
				<a id="logo" href="#welcome" onClick={changeTheme} >30isnottoolate</a>
				<nav style={{ display: (isMenuVisible ? "grid" : "none") }}>
					<a href="#bio">Bio</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</nav>
				<MenuButton
					isMenuVisible={isMenuVisible}
					clickHandler={handleMenuClick}
				/>
			</header>
			<Gear
				viewportWidth={viewportWidth}
				scrollPos={scrollPos}
				svgStrokeClass={isItDark ? "dark-svg-stroke" : "light-svg-stroke"}
			/>
			<BackToTop
				svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
				scrollPos={scrollPos}
			/>
			<main className={isItDark ? "dark-main" : "light-main"} >
				<section id="welcome">
					<img
						id="avatar-image"
						className={isItDark ? "dark-avatar" : "light-avatar"}
						src="./avatar.png"
						alt="Akos Varga"
					/>
					<h1 id="topH">
						Hi! My name is <span>Akos Varga</span>.
					</h1>
					<h2 id="middleH">
						Welcome to my portfolio page!
					</h2>
					<h2>
						I'm an aspiring <span>front-end developer</span>, constantly improving.
					</h2>
				</section>
				<section id="bio">
					<h1>About me</h1>
					<ul>
						<li>born and living in Serbia</li>
						<li>self-taught <span>front-end developer</span>, designer</li>
						<li>possessor of a barely used electronics technician degree</li>
						<li><span>technology enthusiast</span></li>
						<li><span>problem solver</span></li>
						<li>heavy music enjoyer</li>
						<li>bedroom guitar player</li>
					</ul>
				</section>
				<section id="skills">
					<h1>My Skills</h1>
					<div id="languages">
						<h2>Languages</h2>
						<div className="icon-collection" >
							<Icon
								href={"https://html.spec.whatwg.org/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="html"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://www.w3.org/TR/CSS/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="css"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="js"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://www.typescriptlang.org/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="ts"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
						</div>
					</div>
					<div id="technologies">
						<h2>Technologies and frameworks</h2>
						<div className="icon-collection" >
							<Icon
								href={"https://reactjs.org/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="react"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://nodejs.org/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="node"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://expressjs.com/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="express"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://www.mongodb.com/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="mongodb"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
						</div>
					</div>
					<div id="tools-apps">
						<h2>Tools and applications</h2>
						<div className="icon-collection" >
							<Icon
								href={"https://git-scm.com/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="git"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://code.visualstudio.com/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="vscode"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://www.gimp.org/"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="gimp"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
							<Icon
								href={"https://www.adobe.com/products/photoshop.html"}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								iconType="ps"
								iconTooltipClass={isItDark ? "dark-icon-tooltip" : "light-icon-tooltip"}
							/>
						</div>
					</div>
				</section>
				<section id="projects">
					<h1>Projects</h1>
					<div id="project-index-buttons" style={{ height: (viewportWidth <= 650 ? 48 : 60) }}>
						<Arrow
							visibilityClass={projectIndex > 1 ? "visible" : "invisible"}
							svgStrokeClass={isItDark ? "dark-svg-stroke" : "light-svg-stroke"}
							posX={(-visibleProjects * (viewportWidth <= 650 ? 230 : 300) / 2)}
							posY={(viewportWidth <= 650 ? 238 : 297.5)}
							mirrored={true}
							clickHandler={handlePrev}
						/>
						<Arrow
							visibilityClass={projectIndex <= NUMBER_OF_PROJECTS - visibleProjects ? "visible" : "invisible"}
							svgStrokeClass={isItDark ? "dark-svg-stroke" : "light-svg-stroke"}
							posX={(visibleProjects * (viewportWidth <= 650 ? 230 : 300) / 2)}
							posY={(viewportWidth <= 650 ? 238 : 297.5)}
							mirrored={false}
							clickHandler={handleNext}
						/>
					</div>
					<div
						id="projects-container"
						style={{
							width: (visibleProjects * (viewportWidth <= 650 ? 240 : 300) + (viewportWidth <= 650 ? 60 : 100))
						}}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
					>
						<div
							id="project-slider"
							style={{
								left: ((projectIndex - 1) * (-(viewportWidth <= 650 ? 240 : 300))) + (viewportWidth <= 650 ? 50 : 75)
							}}>
							<Project
								themeClass={isItDark ? "dark-project-box" : "light-project-box"}
								visibilityClass={projectVisibility(1)}
								title={"Online Teleprompter"}
								techs={["react", "ts", "css", "html"]}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								buttonThemeClass={isItDark ? "dark-button" : "light-button"}
								demoHref="https://30isnottoolate.github.io/online-teleprompter-ts"
								codeHref="https://github.com/30isnottoolate/online-teleprompter-ts"
							/>
							<Project
								themeClass={isItDark ? "dark-project-box" : "light-project-box"}
								visibilityClass={projectVisibility(2)}
								title={"Stage Teleprompter"}
								techs={["react", "js", "css", "html"]}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								src="stage-teleprompter-screenshot.png"
								description="Some text here..."
								buttonThemeClass={isItDark ? "dark-button" : "light-button"}
								demoHref="https://30isnottoolate.github.io/stage-teleprompter"
								codeHref="https://github.com/30isnottoolate/stage-teleprompter"
							/>
							<Project
								themeClass={isItDark ? "dark-project-box" : "light-project-box"}
								visibilityClass={projectVisibility(3)}
								title={"Portfolio Page"}
								techs={["react", "ts", "css", "html"]}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								buttonThemeClass={isItDark ? "dark-button" : "light-button"}
								demoHref="https://30isnottoolate.github.io/portfolio"
								codeHref="https://github.com/30isnottoolate/portfolio"
							/><Project
								themeClass={isItDark ? "dark-project-box" : "light-project-box"}
								visibilityClass={projectVisibility(4)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								buttonThemeClass={isItDark ? "dark-button" : "light-button"}
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
								themeClass={isItDark ? "dark-project-box" : "light-project-box"}
								visibilityClass={projectVisibility(5)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								buttonThemeClass={isItDark ? "dark-button" : "light-button"}
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
								themeClass={isItDark ? "dark-project-box" : "light-project-box"}
								visibilityClass={projectVisibility(6)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								buttonThemeClass={isItDark ? "dark-button" : "light-button"}
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/>
						</div>
					</div>
				</section>
				<section id="contact">
					<h1>Get in touch</h1>
					<div id="contacts">
						<Contact
							href={"https://www.linkedin.com/in/30isnottoolate/"}
							svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
							contactType={"linkedin"}
							text={"linkedin.com/in/30isnottoolate"}
						/>
						<Contact
							href={"mailto:akos.varga.92@gmail.com?subject=Regarding a job opportunity"}
							svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
							contactType={"email"}
							text={"akos.varga.92@gmail.com"}
						/>
						<Contact
							href={"https://github.com/30isnottoolate/"}
							svgFillClass={isItDark ? "dark-svg-fill" : "light-svg-fill"}
							contactType={"github"}
							text={"github.com/30isnottoolate"}
						/>
					</div>
				</section>
			</main>
			<footer id="bottom" className={isItDark ? "dark-header-footer" : "light-header-footer"} >© {new Date().getFullYear()} Akos Varga, aka 30isnottoolate</footer>
		</div>
	);
}

export default Portfolio;
