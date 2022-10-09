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
						Greetings!
					</h1>
					<h2>
						My name is Akos Varga.
					</h2>
					<h3>
						Welcome to my portfolio page.
					</h3>
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
