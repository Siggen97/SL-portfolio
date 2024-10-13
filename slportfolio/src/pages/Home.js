/** @format */

import React from 'react';

function Home() {
	return (
		<div className="bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gray-900 text-white py-20">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
					<div className="w-full md:w-1/2">
						<h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
							Hi, I'm SLydvo
						</h1>
						<p className="text-lg md:text-xl mb-6">
							A passionate Frontend Developer who loves crafting beautiful and
							functional web experiences. Let's build something amazing
							together!
						</p>
						<a
							href="#projects"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							View My Work
						</a>
					</div>
					<div className="w-full md:w-1/2 mt-8 md:mt-0">
						<img
							src="https://via.placeholder.com/500x500"
							alt="Portfolio Hero"
							className="rounded-lg shadow-lg"
						/>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">About Me</h2>
					<p className="text-lg mb-6">
						I'm a frontend developer with a strong passion for bringing designs
						to life. With expertise in technologies like React, JavaScript, and
						CSS, I focus on delivering efficient, high-quality, and
						user-friendly web solutions.
					</p>
					<a
						href="/about"
						className="text-blue-600 hover:text-blue-700 font-bold">
						Read more about me →
					</a>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				className="bg-gray-100 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Project 1 */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<img
								src="https://via.placeholder.com/400x300"
								alt="Project 1"
								className="rounded-lg mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">Project Title 1</h3>
							<p className="text-gray-700 mb-4">
								A brief description of this project. It demonstrates my skills
								in React and responsive web design.
							</p>
							<a
								href="/projects/1"
								className="text-blue-600 hover:text-blue-700 font-bold">
								View Project →
							</a>
						</div>

						{/* Project 2 */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<img
								src="https://via.placeholder.com/400x300"
								alt="Project 2"
								className="rounded-lg mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">Project Title 2</h3>
							<p className="text-gray-700 mb-4">
								Another project showing my expertise in user interfaces and
								engaging web applications.
							</p>
							<a
								href="/projects/2"
								className="text-blue-600 hover:text-blue-700 font-bold">
								View Project →
							</a>
						</div>

						{/* Project 3 */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<img
								src="https://via.placeholder.com/400x300"
								alt="Project 3"
								className="rounded-lg mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">Project Title 3</h3>
							<p className="text-gray-700 mb-4">
								This project highlights my ability to work with complex layouts
								and modern CSS techniques.
							</p>
							<a
								href="/projects/3"
								className="text-blue-600 hover:text-blue-700 font-bold">
								View Project →
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-16 bg-gray-900 text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
					<p className="text-lg mb-6">
						Whether you have a project in mind or just want to say hello, feel
						free to reach out to me!
					</p>
					<a
						href="/contact"
						className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Contact Me
					</a>
				</div>
			</section>
		</div>
	);
}

export default Home;
