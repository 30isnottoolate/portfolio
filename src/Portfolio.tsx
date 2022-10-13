import React from 'react';
import './Portfolio.css';

function Portfolio() {
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
					<h2>Languages</h2>
					<div id="langs" style={{ paddingBottom: "15px" }} >
						<a href="https://html.spec.whatwg.org/" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.w3.org/TR/CSS/" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
					</div>
					<h2>Technologies and frameworks</h2>
					<div id="techs" style={{ paddingBottom: "15px" }} >
						<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://nodejs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  alt="NodeJS" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://expressjs.com/images/favicon.png" alt="ExpressJS" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
					</div>
					<h2>Tools and applications</h2>
					<div id="tools">
						<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.gimp.org/" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="GIMP" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noreferrer">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Adobe Photoshop" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
					</div>
				</section>
				<section id="projects"></section>
				<section id="contact">
					<h1>Get in touch</h1>
					<div id="contacts">
						<div id="linkedid">
							<a href="https://www.linkedin.com/in/akos-varga-236497239">
								<img src="./linkedin.svg" alt="LinkedIn" style={{ width: "40px" }} /> <span>linkedin.com/in/akos-varga-236497239</span>
							</a>
						</div>
						<div id="mail">
							<a href="mailto:akos.varga.92@gmail.com?subject=Regarding a job opportunity">
								<img src="./mail.svg" alt="Email" style={{ width: "40px" }} /> <span>akos.varga.92@gmail.com</span>
							</a>
						</div>
						<div id="github">
							<a href="https://github.com/30isnottoolate">
								<img src="./github.svg" alt="Github" style={{ width: "40px" }} /> <span>github.com/30isnottoolate</span>
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
