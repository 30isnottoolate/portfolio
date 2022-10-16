import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import Project from './Project';
import Arrow from './Arrow';

const NUMBER_OF_PROJECTS = 6;

const Portfolio: React.FC = () => {
	const [projectIndex, setProjectIndex] = useState(1);
	const [viewportWidth, setViewportWidth] = useState(document.body.offsetWidth);
	const [visibleProjects, setVisibleProjects] = useState(() => {
		if (document.body.offsetWidth < 1400 && document.body.offsetWidth >= 1100) return 3;
		else if (document.body.offsetWidth < 1100 && document.body.offsetWidth >= 700) return 2;
		else if (document.body.offsetWidth < 700) return 1;
		else return 4;
	});
	const [scrollPos, setScrollPos] = useState(document.body.scrollTop);

	const projectContainerRef = useRef<HTMLDivElement>(null);

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
		if (viewportWidth < 1400 && viewportWidth >= 1100) setVisibleProjects(3);
			else if (viewportWidth < 1100 && viewportWidth >= 750) setVisibleProjects(2);
			else if (viewportWidth < 750) setVisibleProjects(1);
			else setVisibleProjects(4);
	}, [viewportWidth]);

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

	return (
		<div id="portfolio">
			<header>
				<a id="logo" href="#welcome">30isnottoolate</a>
				<nav>
					<a href="#bio">Bio</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</nav>
				<p id="menu-button">X</p>
			</header>
			<img id="gear" src="./gear.svg" alt="Gear" style={{ left: "5px", top: "5px", height: "45px", transform: `rotate(${scrollPos / (45 * Math.PI / 360)}deg)` }} />
			<main>
				<section id="welcome">
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
						<div id="langs" >
							<a href="https://html.spec.whatwg.org/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
							</a>
							<a href="https://www.w3.org/TR/CSS/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
							</a>
							<a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
							</a>
							<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
							</a>
						</div>
					</div>
					<div id="technologies">
						<h2>Technologies and frameworks</h2>
						<div id="techs" >
							<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
							</a>
							<a href="https://nodejs.org/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
							</a>
							<a href="https://expressjs.com/" target="_blank" rel="noreferrer">
								<img src="https://expressjs.com/images/favicon.png" alt="ExpressJS" />
							</a>
							<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
							</a>
						</div>
					</div>
					<div id="tools-apps">
						<h2>Tools and applications</h2>
						<div id="tools">
							<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
							</a>
							<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
							</a>
							<a href="https://www.gimp.org/" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="GIMP" />
							</a>
							<a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noreferrer">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Adobe Photoshop" />
							</a>
						</div>
					</div>
				</section>
				<section id="projects">
					<h1>Projects</h1>
					<div id="project-index-buttons" style={{ height: "60px" }}>
							<Arrow
								arrowClassName={projectIndex > 1 ? "visible" : "invisible"}
								posX={(-visibleProjects * 300 / 2)}
								posY={297.5}
								mirrored={true}
								clickHandler={handlePrev}
								color={"#80b9ff"}
								strokeWidth={5}
							/>
							<Arrow
								arrowClassName={projectIndex <= NUMBER_OF_PROJECTS - visibleProjects ? "visible" : "invisible"}
								posX={(visibleProjects * 300 / 2)}
								posY={297.5}
								mirrored={false}
								clickHandler={handleNext}
								color={"#80b9ff"}
								strokeWidth={5}
							/>
						</div>
					<div id="projects-container" ref={projectContainerRef} style={{ width: (visibleProjects * 300 - 50 + 150) }}>
						<div id="project-slider" style={{ left: ((projectIndex - 1) * (-300)) + 75 }}>
							<Project
								projectVisibility={projectVisibility(1)}
								title={"Online Teleprompter"}
								techs={["react", "ts", "css", "html"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://30isnottoolate.github.io/online-teleprompter-ts"
								codeHref="https://github.com/30isnottoolate/online-teleprompter-ts"
							/>
							<Project
								projectVisibility={projectVisibility(2)}
								title={"Stage Teleprompter"}
								techs={["react", "js", "css", "html"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://30isnottoolate.github.io/stage-teleprompter"
								codeHref="https://github.com/30isnottoolate/stage-teleprompter"
							/>
							<Project
								projectVisibility={projectVisibility(3)}
								title={"Portfolio Page"}
								techs={["react", "ts", "css", "html"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://30isnottoolate.github.io/portfolio"
								codeHref="https://github.com/30isnottoolate/portfolio"
							/><Project
								projectVisibility={projectVisibility(4)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
								projectVisibility={projectVisibility(5)}
								title={"Title"}
								techs={["js", "ts", "react"]}
								src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg"
								description="Some text here..."
								demoHref="https://www.solidbackgrounds.com"
								codeHref="https://www.solidbackgrounds.com"
							/><Project
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
						<div id="linkedid">
							<a href="https://www.linkedin.com/in/akos-varga-236497239" target="_blank" rel="noreferrer">
								<img src="./linkedin.svg" alt="LinkedIn" /> <span>linkedin.com/in/akos-varga-236497239</span>
							</a>
						</div>
						<div id="mail">
							<a href="mailto:akos.varga.92@gmail.com?subject=Regarding a job opportunity" target="_blank" rel="noreferrer">
								<img src="./mail.svg" alt="Email" /> <span>akos.varga.92@gmail.com</span>
							</a>
						</div>
						<div id="github">
							<a href="https://github.com/30isnottoolate" target="_blank" rel="noreferrer">
								<img src="./github.svg" alt="Github" /> <span>github.com/30isnottoolate</span>
							</a>
						</div>
					</div>
				</section>
			</main>
			<footer id="bottom">© {new Date().getFullYear()} Akos Varga, aka 30isnottoolate</footer>
		</div>
	);
}

export default Portfolio;
