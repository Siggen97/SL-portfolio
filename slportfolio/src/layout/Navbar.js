/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gray-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link
							to="/"
							className="text-2xl font-bold">
							SLydvo
						</Link>
					</div>
					<div className="hidden md:flex space-x-4">
						<Link
							to="/about"
							className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
							About
						</Link>
						<Link
							to="/projects"
							className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
							Projects
						</Link>
						<Link
							to="/contact"
							className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
							Contact
						</Link>
					</div>
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							className="inline-flex items-center p-2 rounded-md">
							<svg
								className="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor">
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<Link
						to="/about"
						className="block px-3 py-2 rounded-md">
						About
					</Link>
					<Link
						to="/projects"
						className="block px-3 py-2 rounded-md">
						Projects
					</Link>
					<Link
						to="/contact"
						className="block px-3 py-2 rounded-md">
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
