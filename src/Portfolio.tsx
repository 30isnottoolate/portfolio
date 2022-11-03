import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import MenuButton from './components/MenuButton';
import Gear from './components/Gear';
import SideContacts from './components/SideContacts';
import BackToTop from './components/BackToTop';
import Icon from './components/Icon';
import Project from './components/Project';
import Arrow from './components/Arrow';
import Contact from './components/Contact';

const NUMBER_OF_PROJECTS = 6;

const Portfolio: React.FC = () => {
	const [isItDark, setIsItDark] = useState(() => {
		if (localStorage.getItem("isItDark")) {
			if (localStorage.getItem("isItDark") === "true") {
				return true;
			} else return false;
		} else {
			return true;
		}
	});
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
		isItDark ? document.body.className = "dark" : document.body.className = "light";
		localStorage.setItem("isItDark", isItDark.toString());
	}, [isItDark]);

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

	const headerFooterTheme = () => isItDark ? "dark-header-footer" : "light-header-footer";
	const navTheme = () => viewportWidth <= 650 ? (isItDark ? "dark-mini-nav" : "light-mini-nav") : "";
	const navAnchorTheme = () => viewportWidth <= 650 ? (isItDark ? "dark-mini-nav-a" : "light-mini-nav-a") : "";
	const svgStrokeTheme = () => isItDark ? "dark-svg-stroke" : "light-svg-stroke";
	const svgFillTheme = () => isItDark ? "dark-svg-fill" : "light-svg-fill";
	const tooltipTheme = () => isItDark ? "dark-icon-tooltip" : "light-icon-tooltip";
	const projectBoxTheme = () => isItDark ? "dark-project-box" : "light-project-box";
	const projectButtonTheme = () => isItDark ? "dark-button" : "light-button";

	return (
		<div id="portfolio">
			<header className={headerFooterTheme()} >
				<a
					id="logo"
					href="#welcome" >
					30isnottoolate
				</a>
				<nav
					className={navTheme()}
					style={{
						display: (isMenuVisible ? "grid" : "none"),
						borderWidth: (viewportWidth <= 380 ? "0 0 1px 0" : viewportWidth > 650 ? "0" : "0 0 1px 1px")
					}}
				>
					<a
						className={navAnchorTheme()}
						href="#bio">
						Bio
					</a>
					<a
						className={navAnchorTheme()}
						href="#skills">
						Skills
					</a>
					<a
						className={navAnchorTheme()}
						href="#projects">
						Projects
					</a>
					<a
						className={navAnchorTheme()}
						href="#contact">
						Contact
					</a>
				</nav>
				<MenuButton
					clickHandler={handleMenuClick}
					themeClass={isItDark ? "dark-menu-button" : "light-menu-button"}
					isMenuVisible={isMenuVisible}
				/>
			</header>
			<Gear
				svgStrokeClass={svgStrokeTheme()}
				changeTheme={changeTheme}
				viewportWidth={viewportWidth}
				scrollPos={scrollPos}
			/>
			<SideContacts
				scrollPos={scrollPos}
				themeClass={isItDark ? "dark-side-contact" : "light-side-contact"}
			/>
			<BackToTop
				svgFillClass={svgFillTheme()}
				scrollPos={scrollPos}
			/>
			<main className={isItDark ? "dark-main" : "light-main"} >
				<section id="welcome">
					<img
						id="avatar-image"
						className={isItDark ? "dark-avatar" : "light-avatar"}
						src="./images/avatar.png"
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
								svgFillClass={svgFillTheme()}
								iconType="html"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://www.w3.org/TR/CSS/"}
								svgFillClass={svgFillTheme()}
								iconType="css"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"}
								svgFillClass={svgFillTheme()}
								iconType="js"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://www.typescriptlang.org/"}
								svgFillClass={svgFillTheme()}
								iconType="ts"
								iconTooltipClass={tooltipTheme()}
							/>
						</div>
					</div>
					<div id="technologies">
						<h2>Technologies and frameworks</h2>
						<div className="icon-collection" >
							<Icon
								href={"https://reactjs.org/"}
								svgFillClass={svgFillTheme()}
								iconType="react"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://nodejs.org/"}
								svgFillClass={svgFillTheme()}
								iconType="node"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://expressjs.com/"}
								svgFillClass={svgFillTheme()}
								iconType="express"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://www.mongodb.com/"}
								svgFillClass={svgFillTheme()}
								iconType="mongodb"
								iconTooltipClass={tooltipTheme()}
							/>
						</div>
					</div>
					<div id="tools-apps">
						<h2>Tools and applications</h2>
						<div className="icon-collection" >
							<Icon
								href={"https://git-scm.com/"}
								svgFillClass={svgFillTheme()}
								iconType="git"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://code.visualstudio.com/"}
								svgFillClass={svgFillTheme()}
								iconType="vscode"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://www.gimp.org/"}
								svgFillClass={svgFillTheme()}
								iconType="gimp"
								iconTooltipClass={tooltipTheme()}
							/>
							<Icon
								href={"https://www.adobe.com/products/photoshop.html"}
								svgFillClass={svgFillTheme()}
								iconType="ps"
								iconTooltipClass={tooltipTheme()}
							/>
						</div>
					</div>
				</section>
				<section id="projects">
					<h1>Projects</h1>
					<div id="project-index-buttons" style={{ height: (viewportWidth <= 650 ? 48 : 60) }}>
						<Arrow
							visibilityClass={projectIndex > 1 ? "visible" : "invisible"}
							svgStrokeClass={svgStrokeTheme()}
							posX={(-visibleProjects * (viewportWidth <= 650 ? 230 : 300) / 2)}
							posY={(viewportWidth <= 650 ? 238 : 297.5)}
							mirrored={true}
							clickHandler={handlePrev}
						/>
						<Arrow
							visibilityClass={projectIndex <= NUMBER_OF_PROJECTS - visibleProjects ? "visible" : "invisible"}
							svgStrokeClass={svgStrokeTheme()}
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
								themeClass={projectBoxTheme()}
								visibilityClass={projectVisibility(1)}
								title={"Online Teleprompter"}
								techs={["react", "ts", "css", "html"]}
								svgFillClass={svgFillTheme()}
								src="/images/project_screenshots/online-teleprompter-screenshot.png"
								description="Some text here..."
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
								src="/images/project_screenshots/stage-teleprompter-screenshot.png"
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
								src="/images/project_screenshots/portfolio-screenshot.png"
								description="Some text here..."
								buttonThemeClass={projectButtonTheme()}
								demoHref="https://30isnottoolate.github.io/portfolio"
								codeHref="https://github.com/30isnottoolate/portfolio"
							/><Project
								themeClass={projectBoxTheme()}
								visibilityClass={projectVisibility(4)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								svgFillClass={svgFillTheme()}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								buttonThemeClass={projectButtonTheme()}
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
								themeClass={projectBoxTheme()}
								visibilityClass={projectVisibility(5)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								svgFillClass={svgFillTheme()}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								buttonThemeClass={projectButtonTheme()}
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
								themeClass={projectBoxTheme()}
								visibilityClass={projectVisibility(6)}
								title={"Title"}
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
				</section>
				<section id="contact">
					<h1>Get in touch</h1>
					<div id="contacts">
						<Contact
							svgFillClass={svgFillTheme()}
							contactType={"linkedin"}
						/>
						<Contact
							svgFillClass={svgFillTheme()}
							contactType={"email"}
						/>
						<Contact
							svgFillClass={svgFillTheme()}
							contactType={"github"}
						/>
					</div>
				</section>
			</main>
			<footer id="bottom" className={headerFooterTheme()} >© {new Date().getFullYear()} Akos Varga, aka 30isnottoolate</footer>
		</div>
	);
}

export default Portfolio;
