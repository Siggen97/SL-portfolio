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
							A Frontend Developer who loves crafting beautiful and functional
							web experiences.
						</p>
						<a
							href="#projects"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							View My Work
						</a>
					</div>
					<div className="w-full md:w-1/2 mt-8 md:mt-0">
						<img
							src="https://i.imghippo.com/files/Vzkwp1728836240.jpg"
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
						I'm a frontend developer, delivering efficient, high-quality and user-friendly web solutions.
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
						My Latest Work
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Project 1 */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<img
								src="https://i.imghippo.com/files/KmmbV1728815812.png"
								alt="Project 1"
								className="rounded-lg mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">Holiday Booking Site</h3>
							<p className="text-gray-700 mb-4">
								#javascript #react #css #bootstrap #netlify #api #figma
							</p>
							<a
								href="https://holidaze-sl.netlify.app"
								className="text-blue-600 hover:text-blue-700 font-bold">
								View Project →
							</a>
						</div>

						{/* Project 2 */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<img
								src="https://www.imghippo.com/files/c937I1728815866.png"
								alt="Project 2"
								className="rounded-lg mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">Ecommerce Website</h3>
							<p className="text-gray-700 mb-4">
								#javascript #react #css #bootstrap #netlify #api
							</p>
							<a
								href="https://ludvigs-shop.netlify.app"
								className="text-blue-600 hover:text-blue-700 font-bold">
								View Project →
							</a>
						</div>

						{/* Project 3 */}
						<div className="bg-white rounded-lg shadow-lg p-6">
							<img
								src="https://i.imghippo.com/files/IvW231728836819.png"
								alt="Project 3"
								className="rounded-lg mb-4"
							/>
							<h3 className="text-xl font-bold mb-2">Personal Blog</h3>
							<p className="text-gray-700 mb-4">
								#javascript #react #css #bootstrap #node #mongodb #express
								#heroku
							</p>
							<a
								href="https://thenumbertwelfth.com/"
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
