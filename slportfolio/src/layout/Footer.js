/** @format */

import React from 'react';

function Footer() {
	return (
		<div className="bg-gray-900 text-white py-20">
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
		</div>
	);
}

export default Footer;
