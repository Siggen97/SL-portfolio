/** @format */

import React from 'react';

function Contact() {
	return (
		<div className="bg-gray-900 text-white py-20">
			<div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
				<h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
				<form
					action="SEND TO BACKEND"
					method="POST">
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium mb-2">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							placeholder="Enter your name"
							className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="Enter your email"
							className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="subject"
							className="block text-sm font-medium mb-2">
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							required
							placeholder="Subject"
							className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="message"
							className="block text-sm font-medium mb-2">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							placeholder="Your message"
							rows="5"
							className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-300">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
