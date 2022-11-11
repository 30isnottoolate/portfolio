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
	const [bodyWidth, setBodyWidth] = useState(() => {
		return document.body.offsetWidth;
	});
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const paraContainerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener("load", () => {
			setBodyWidth(document.body.offsetWidth);
			setIsMenuVisible(document.body.offsetWidth <= 650 ? false : true);
		});
		return () => window.removeEventListener("load", () => { });
	}, []);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setBodyWidth(document.body.offsetWidth);
		});
		return () => window.removeEventListener("resize", () => { });
	}, []);

	useEffect(() => {
		localStorage.setItem("isItDark", isItDark.toString());
	}, [isItDark]);

	useEffect(() => {
		setIsMenuVisible(bodyWidth <= 650 ? false : true);
	}, [bodyWidth]);

	const changeTheme = () => setIsItDark((prevValue) => !prevValue);

	const handleMenuClick = () => setIsMenuVisible((prevValue) => !prevValue);

	const headerFooterTheme = () => isItDark ? "dark-header-footer" : "light-header-footer";
	const navTheme = () => bodyWidth <= 650 ? (isItDark ? "dark-mini-nav" : "light-mini-nav") : "";
	const navAnchorTheme = () => bodyWidth <= 650 ? (isItDark ? "dark-mini-nav-a" : "light-mini-nav-a") : "";
	const svgFillTheme = () => isItDark ? "dark-svg-fill" : "light-svg-fill";
	const tooltipTheme = () => isItDark ? "dark-icon-tooltip" : "light-icon-tooltip";

	return (
		<>
			<NavBar isItDark={isItDark} />
			<Gear
				isItDark={isItDark}
				changeTheme={changeTheme}
				paraContainerRef={paraContainerRef}
			/>
			<SideContacts
				paraContainerRef={paraContainerRef}
				themeClass={isItDark ? "dark-side-contact" : "light-side-contact"}
			/>
			<BackToTop
				svgFillClass={svgFillTheme()}
				paraContainerRef={paraContainerRef}
			/>
			<div
				id="parallax-container"
				className={isItDark ? "dark" : "light"}
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
							</>
							<>
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
							</>
							<>
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
							</>
						</section>
						<section id="projects">
							<h1>Projects</h1>
							<ProjectsContainer isItDark={isItDark}/>
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
			</div>
		</>
	);
}

export default Portfolio;
