/** @format */

import React from 'react';

function About() {
	return (
		// Ensure the entire viewport is covered with the dark background
		<div className="min-h-screen bg-gray-900 text-white">
			{/* Hero Section */}
			<section className="py-20">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
					{/* Text Column */}
					<div className="w-full md:w-1/2 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 m-3">
							Sigrid Lydvo
						</h1>
						<p className="text-lg md:text-xl mb-6 m-3">
							I’m a dedicated Frontend Developer with a passion for crafting
							beautiful, user-centric web experiences. I bring designs to life
							using technologies like Figma, Git, GitHub, HTML, CSS/SASS,
							JavaScript, React, Bootstrap, Node.js, and MongoDB. With a keen
							eye for both aesthetics and functionality, my goal is to create
							intuitive solutions that engage users while meeting business
							objectives. I thrive on collaboration, value clean, maintainable
							code, and am always eager to explore new tools and best practices
							that elevate the quality of my work.
						</p>
						<a
							href="/projects"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
							View My Work
						</a>
					</div>
					{/* Image Column */}
					<div className=" md:w-1/3">
						<img
							src="https://i.imghippo.com/files/Vzkwp1728836240.jpg"
							alt="Portfolio Hero"
							className="rounded-lg shadow-lg"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
