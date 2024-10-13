import React from 'react';

const projects = [
	{
		title: 'Auction House',
		underTitle: 'Semester Project 2',
		description:
			'This project showcases my skills in web development, creating an auction website. Focus on creating responsive, dynamic user interfaces. The goal of the project was to build a fully functional website with API integration. (HTML, Javascript, css, SASS, bootstrap).',
		imageUrl: 'https://i.imghippo.com/files/sJKcr1728817751.png',
		githubUrl: 'https://github.com/Siggen97/Semester-Project-2',
		liveUrl: 'https://gentle-narwhal-a1c2cd.netlify.app',
	},
	{
		title: 'Ecommerce Site',
		underTitle: 'JavaScript Frameworks CA',
		description:
			'This project demonstrates my proficiency in modern JavaScript frameworks, specifically React.js. I built an interactive web application that includes API integration and features like routing, components and etc. from react.js. Also using principles for responsive design. (Javascript, react, css, bootstrap).',
		imageUrl: 'https://www.imghippo.com/files/c937I1728815866.png',
		githubUrl: 'https://github.com/Siggen97/React-Ecommerce',
		liveUrl: 'https://ludvigs-shop.netlify.app',
	},
	{
		title: 'Holidaze Bookings',
		underTitle: 'Project Exam',
		description:
			'In this project, I developed a comprehensive application for a newly launched accommodation booking site called Holidaze. It involved advanced front-end development techniques, including API integration, authentication, and responsive design principles. (Javascript, react, css, bootstrap). ',
		imageUrl: 'https://i.imghippo.com/files/KmmbV1728815812.png',
		githubUrl: 'https://github.com/Siggen97/holidaze-booking',
		liveUrl: 'https://holidaze-sl.netlify.app',
	},
];

function Projects() {
	return (
		<div className="bg-gray-70 py-16">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-lg overflow-hidden">
							<img
								src={project.imageUrl}
								alt={`${project.title} screenshot`}
								className="w-full h-58 object-cover"
							/>
							<div className="p-6">
								<h2 className="text-2xl font-bold mb-2">{project.title}</h2>
								<h5 className="text-m font-bold mb-2">{project.underTitle}</h5>
								<p className="text-gray-700 mb-4">{project.description}</p>
								<div className="flex justify-between items-center">
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:text-blue-800 font-bold">
										GitHub Repo
									</a>
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 hover:text-blue-800 font-bold">
										Live Site
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

		</div>
	);
}

export default Projects;
