import React, { useRef, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import SideContacts from './SideContacts';
import BackToTop from './BackToTop';
import Background from './Background';
import LazyImage from './LazyImage';
import Icon from './Icon';
import iconsProps from '../utilities/iconsProps';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';

const Portfolio: React.FC = () => {

	const paraContainerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const welcomeRef = useRef<HTMLElement>(null);
	const bioRef = useRef<HTMLElement>(null);
	const skillsRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {console.log(entries)}, {threshold: 0.1})
		projectsRef.current && observer.observe(projectsRef.current);

		return () => {projectsRef.current && observer.unobserve(projectsRef.current)}
	}, []);

	return (
		<>
			<NavBar paraContainerRef={paraContainerRef} />
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
						<section id="welcome" ref={welcomeRef}>
							<LazyImage
								className="avatar-image"
								src="./images/avatar.png"
								alt="Akos Varga"
							/>
							<h1>
								Welcome to my portfolio!
							</h1>
							<h2>
								My name is <span>Akos Varga</span>.
							</h2>
							<h3>
								I'm a <span>front-end developer</span>, creating interesting web apps.
							</h3>
						</section>
						<section id="bio" ref={bioRef}>
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
						<section id="skills" ref={skillsRef}>
							<h1>My Skills</h1>
							<>
								<h2>Languages</h2>
								<div className="icon-collection" >
									{iconsProps.slice(0, 4).map((item, index) =>
										<Icon
											key={index}
											href={item.href}
											iconType={item.iconType}
										/>
									)}
								</div>
							</>
							<>
								<h2>Technologies and frameworks</h2>
								<div className="icon-collection" >
									{iconsProps.slice(4, 8).map((item, index) =>
										<Icon
											key={index}
											href={item.href}
											iconType={item.iconType}
										/>
									)}
								</div>
							</>
							<>
								<h2>Tools and applications</h2>
								<div className="icon-collection" >
									{iconsProps.slice(8, 12).map((item, index) =>
										<Icon
											key={index}
											href={item.href}
											iconType={item.iconType}
										/>
									)}
								</div>
							</>
						</section>
						<section id="projects" ref={projectsRef}>
							<h1>Projects</h1>
							<ProjectsContainer />
						</section>
						<section id="contact" ref={contactRef}>
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
