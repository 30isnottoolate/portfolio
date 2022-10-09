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
					Welcome to my portfolio page!
					</h1>
					<h2>
						My name is <span>Akos Varga</span>.
					</h2>
					<h2>
						I'm an aspiring front-end developer, constantly improving.
					</h2>
				</section>
				<section id="bio"></section>
				<section id="skills"></section>
				<section id="works"></section>
				<section id="contact"></section>
			</main>
			<footer id="bottom"></footer>
		</div>
	);
}

export default Portfolio;
