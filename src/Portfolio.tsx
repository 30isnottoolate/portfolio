import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const NUMBER_OF_PROJECTS = 8;

const Portfolio: React.FC = () => {
	const [projectIndex, setProjectIndex] = useState(1);
	const [visibleProjects, setVisibleProjects] = useState(() => {
		if (window.innerWidth < 1400 && window.innerWidth >= 1100) return 3;
			else if (window.innerWidth < 1100 && window.innerWidth >= 700) return 2;
			else if (window.innerWidth < 700) return 1;
			else return 4;
	});

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth < 1400 && window.innerWidth >= 1100) setVisibleProjects(3);
			else if (window.innerWidth < 1100 && window.innerWidth >= 700) setVisibleProjects(2);
			else if (window.innerWidth < 700) setVisibleProjects(1);
			else setVisibleProjects(4);
		});
		return () => window.removeEventListener("resize", () => {});
	}, []);

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
			</header>
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
					<div id="projects-container" style={{width: (visibleProjects * 300 - 50)}}>
						<div id="project-slider" style={{left: ((projectIndex - 1) * (-300))}}>
							<div className={`project-box ${projectVisibility(1)}`}>
								<p className="project-title">Title</p>
								<div className="project-techs">
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
								</div>
								<img className="project-img" src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-ncs-solid-color-background.jpg" alt="Description" />
								<p className="project-description">Description</p>
								<div className="project-buttons">
									<button>Demo</button>
									<button>Code</button>
								</div>
							</div>
							<div className={`project-box ${projectVisibility(2)}`}></div>
							<div className={`project-box ${projectVisibility(3)}`}></div>
							<div className={`project-box ${projectVisibility(4)}`}></div>
							<div className={`project-box ${projectVisibility(5)}`}></div>
							<div className={`project-box ${projectVisibility(6)}`}></div>
							<div className={`project-box ${projectVisibility(7)}`}></div>
							<div className={`project-box ${projectVisibility(8)}`}></div>
						</div>
						<button id="prev-button" onClick={handlePrev}>Previous</button>
						<button id="next-button" onClick={handleNext}>Next</button>
					</div>
				</section>
				<section id="contact">
					<h1>Get in touch</h1>
					<div id="contacts">
						<div id="linkedid">
							<a href="https://www.linkedin.com/in/akos-varga-236497239">
								<img src="./linkedin.svg" alt="LinkedIn" /> <span>linkedin.com/in/akos-varga-236497239</span>
							</a>
						</div>
						<div id="mail">
							<a href="mailto:akos.varga.92@gmail.com?subject=Regarding a job opportunity">
								<img src="./mail.svg" alt="Email" /> <span>akos.varga.92@gmail.com</span>
							</a>
						</div>
						<div id="github">
							<a href="https://github.com/30isnottoolate">
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
