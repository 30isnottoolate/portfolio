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
		<div id="portfolio" className={isItDark ? "dark" : "light"} >
			<header className={isItDark ? "dark dark-big-shadow" : "light light-big-shadow"}>
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
				color={theme.color}
			/>
			<BackToTop
				scrollPos={scrollPos}
				color={theme.color}
				hoverColor={theme.secColor}
				strokeColor={theme.bgColor}
			/>
			<main>
				<section id="welcome">
					<img
						id="avatar-image"
						className={isItDark ? "dark dark-medium-shadow" : "light light-medium-shadow"}
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
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}
								alt={"HTML"}
							/>
							<Icon
								href={"https://www.w3.org/TR/CSS/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}
								alt={"CSS"}
							/>
							<Icon
								href={"https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
								alt={"JavaScript"}
							/>
							<Icon
								href={"https://www.typescriptlang.org/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
								alt={"TypeScript"}
							/>
						</div>
					</div>
					<div id="technologies">
						<h2>Technologies and frameworks</h2>
						<div className="icon-collection" >
							<Icon
								href={"https://reactjs.org/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
								alt={"React"}
							/>
							<Icon
								href={"https://nodejs.org/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}
								alt={"NodeJS"}
							/>
							<Icon
								href={"https://expressjs.com/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}
								alt={"ExpressJS"}
								bGColor={"#ffffff"}
							/>
							<Icon
								href={"https://www.mongodb.com/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}
								alt={"MongoDB"}
							/>
						</div>
					</div>
					<div id="tools-apps">
						<h2>Tools and applications</h2>
						<div className="icon-collection" >
							<Icon
								href={"https://git-scm.com/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}
								alt={"Git"}
							/>
							<Icon
								href={"https://code.visualstudio.com/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"}
								alt={"VS Code"}
							/>
							<Icon
								href={"https://www.gimp.org/"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg"}
								alt={"GIMP"}
							/>
							<Icon
								href={"https://www.adobe.com/products/photoshop.html"}
								src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"}
								alt={"Adobe Photoshop"}
							/>
						</div>
					</div>
				</section>
				<section id="projects">
					<h1>Projects</h1>
					<div id="project-index-buttons" style={{ height: (viewportWidth <= 650 ? 48 : 60) }}>
						<Arrow
							arrowClassName={projectIndex > 1 ? "visible" : "invisible"}
							posX={(-visibleProjects * (viewportWidth <= 650 ? 230 : 300) / 2)}
							posY={(viewportWidth <= 650 ? 238 : 297.5)}
							mirrored={true}
							clickHandler={handlePrev}
							color={theme.color}
							hoverColor={theme.secColor}
							bgColor={theme.bgColor}
							strokeWidth={5}
						/>
						<Arrow
							arrowClassName={projectIndex <= NUMBER_OF_PROJECTS - visibleProjects ? "visible" : "invisible"}
							posX={(visibleProjects * (viewportWidth <= 650 ? 230 : 300) / 2)}
							posY={(viewportWidth <= 650 ? 238 : 297.5)}
							mirrored={false}
							clickHandler={handleNext}
							color={theme.color}
							hoverColor={theme.secColor}
							bgColor={theme.bgColor}
							strokeWidth={5}
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
								classTheme={isItDark ? "dark dark-medium-shadow" : "light light-medium-shadow"}
								buttonTheme={isItDark ? "dark-button" : "light-button"}
								projectVisibility={projectVisibility(1)}
								title={"Online Teleprompter"}
								techs={["react", "ts", "css", "html"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://30isnottoolate.github.io/online-teleprompter-ts"
								codeHref="https://github.com/30isnottoolate/online-teleprompter-ts"
							/>
							<Project
								classTheme={isItDark ? "dark dark-medium-shadow" : "light light-medium-shadow"}
								buttonTheme={isItDark ? "dark-button" : "light-button"}
								projectVisibility={projectVisibility(2)}
								title={"Stage Teleprompter"}
								techs={["react", "js", "css", "html"]}
								src="stage-teleprompter-screenshot.png"
								description="Some text here..."
								demoHref="https://30isnottoolate.github.io/stage-teleprompter"
								codeHref="https://github.com/30isnottoolate/stage-teleprompter"
							/>
							<Project
								classTheme={isItDark ? "dark dark-medium-shadow" : "light light-medium-shadow"}
								buttonTheme={isItDark ? "dark-button" : "light-button"}
								projectVisibility={projectVisibility(3)}
								title={"Portfolio Page"}
								techs={["react", "ts", "css", "html"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://30isnottoolate.github.io/portfolio"
								codeHref="https://github.com/30isnottoolate/portfolio"
							/><Project
								classTheme={isItDark ? "dark dark-medium-shadow" : "light light-medium-shadow"}
								buttonTheme={isItDark ? "dark-button" : "light-button"}
								projectVisibility={projectVisibility(4)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
								classTheme={isItDark ? "dark dark-medium-shadow" : "light light-medium-shadow"}
								buttonTheme={isItDark ? "dark-button" : "light-button"}
								projectVisibility={projectVisibility(5)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
								classTheme={isItDark ? "dark dark-medium-shadow" : "light light-medium-shadow"}
								buttonTheme={isItDark ? "dark-button" : "light-button"}
								projectVisibility={projectVisibility(6)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
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
							color={theme.color}
							bgColor={theme.bgColor}
							contactType={"linkedin"}
							text={"linkedin.com/in/30isnottoolate"}
						/>
						<Contact
							href={"mailto:akos.varga.92@gmail.com?subject=Regarding a job opportunity"}
							color={theme.color}
							bgColor={theme.bgColor}
							contactType={"email"}
							text={"akos.varga.92@gmail.com"}
						/>
						<Contact
							href={"https://github.com/30isnottoolate/"}
							color={theme.color}
							bgColor={theme.bgColor}
							contactType={"github"}
							text={"github.com/30isnottoolate"}
						/>
					</div>
				</section>
			</main>
			<footer id="bottom" className={isItDark ? "dark dark-big-shadow" : "light light-big-shadow"} >© {new Date().getFullYear()} Akos Varga, aka 30isnottoolate</footer>
		</div>
	);
}

export default Portfolio;
