import React, { useState, useRef, useEffect } from 'react';
import './Portfolio.css';
import Background from './components/Background';
import NavBar from './components/NavBar';
import Gear from './components/Gear';
import SideContacts from './components/SideContacts';
import BackToTop from './components/BackToTop';
import Icon from './components/Icon';
import ProjectsContainer from './components/ProjectsContainer';
import Contact from './components/Contact';

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

	const paraContainerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.body.className = isItDark ? "dark" : "light";
		localStorage.setItem("isItDark", isItDark.toString());
	}, [isItDark]);

	return (
		<>
			<NavBar />
			<Gear
				changeTheme={() => setIsItDark((prevValue) => !prevValue)}
				paraContainerRef={paraContainerRef}
			/>
			<SideContacts
				paraContainerRef={paraContainerRef}
			/>
			<BackToTop
				paraContainerRef={paraContainerRef}
			/>
			<div
				id="parallax-container"
				ref={paraContainerRef}
			>
				<Background
					themeClass={isItDark ? "dark-background background-1" : "light-background background-1"}
					contentRef={contentRef}
				/>
				<Background
					themeClass={isItDark ? "dark-background background-2" : "light-background background-2"}
					contentRef={contentRef}
				/>
				<div
					id="content-container"
					ref={contentRef}
				>
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
							<>
								<h2>Languages</h2>
								<div className="icon-collection" >
									<Icon
										href={"https://html.spec.whatwg.org/"}
										iconType="html"
									/>
									<Icon
										href={"https://www.w3.org/TR/CSS/"}
										iconType="css"
									/>
									<Icon
										href={"https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"}
										iconType="js"
									/>
									<Icon
										href={"https://www.typescriptlang.org/"}
										iconType="ts"
									/>
								</div>
							</>
							<>
								<h2>Technologies and frameworks</h2>
								<div className="icon-collection" >
									<Icon
										href={"https://reactjs.org/"}
										iconType="react"
									/>
									<Icon
										href={"https://nodejs.org/"}
										iconType="node"
									/>
									<Icon
										href={"https://expressjs.com/"}
										iconType="express"
									/>
									<Icon
										href={"https://www.mongodb.com/"}
										iconType="mongodb"
									/>
								</div>
							</>
							<>
								<h2>Tools and applications</h2>
								<div className="icon-collection" >
									<Icon
										href={"https://git-scm.com/"}
										iconType="git"
									/>
									<Icon
										href={"https://code.visualstudio.com/"}
										iconType="vscode"
									/>
									<Icon
										href={"https://www.gimp.org/"}
										iconType="gimp"
									/>
									<Icon
										href={"https://www.adobe.com/products/photoshop.html"}
										iconType="ps"
									/>
								</div>
							</>
						</section>
						<section id="projects">
							<h1>Projects</h1>
							<ProjectsContainer />
						</section>
						<section id="contact">
							<h1>Get in touch</h1>
							<div id="contacts">
								<Contact
									isItDark={isItDark}
									contactType={"linkedin"}
								/>
								<Contact
									isItDark={isItDark}
									contactType={"email"}
								/>
								<Contact
									isItDark={isItDark}
									contactType={"github"}
								/>
							</div>
						</section>
					</main>
					<footer
						id="bottom"
						className="header-footer"
					>
						© {new Date().getFullYear()} Akos Varga, aka 30isnottoolate
					</footer>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
