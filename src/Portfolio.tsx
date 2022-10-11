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
					<a href="#works">Portfolio</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>
			<main>
				<section id="welcome">
					<h1>
						Hi! My name is <span>Akos Varga</span>.
					</h1>
					<h2>
						Welcome to my <span>portfolio page</span>!
					</h2>
					<h2>
						I'm an aspiring <span>front-end developer</span>, constantly improving.
					</h2>
				</section>
				<section id="bio"></section>
				<section id="skills">
					<h1>My Skills</h1>
					<h2>Languages</h2>
					<div id="langs">
						<a href="https://html.spec.whatwg.org/" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.w3.org/TR/CSS/" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.typescriptlang.org/" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
					</div>
					<h2>Technologies and frameworks</h2>
					<div id="techs">
						<a href="https://reactjs.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://nodejs.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://expressjs.com/" target="_blank"><img src="https://expressjs.com/images/favicon.png" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.mongodb.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
					</div>
					<h2>Tools</h2>
					<div id="tools">
						<a href="https://git-scm.com/" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://code.visualstudio.com/" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.gimp.org/" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
						<a href="https://www.adobe.com/products/photoshop.html" target="_blank">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" style={{ height: "40px", width: "40px", padding: "5px" }} />
						</a>
					</div>
				</section>
				<section id="works"></section>
				<section id="contact"></section>
			</main>
			<footer id="bottom">© {new Date().getFullYear()} Akos Varga, aka 30isnottoolate</footer>
		</div>
	);
}

export default Portfolio;
