import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Background from './Background';
import NavBar from './NavBar';
import Gear from './Gear';
import SideContacts from './SideContacts';
import BackToTop from './BackToTop';
import Icon from './Icon';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';

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
					givenID="background-1"
					contentRef={contentRef}
				/>
				<Background
					givenID="background-2"
					contentRef={contentRef}
				/>
				<div
					id="content-container"
					ref={contentRef}
				>
					<main>
						<section id="welcome">
							<img
								id="avatar-image"
								src="./images/avatar.png"
								alt="Akos Varga"
							/>
							<h1 style={{fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif"}}>
								Hi! My name is <span>Akos Varga</span>.
							</h1>
							<h2 style={{fontFamily: "'Poppins', Arial, Helvetica, sans-serif"}}>
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
									contactType={"linkedin"}
								/>
								<Contact
									contactType={"email"}
								/>
								<Contact
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
