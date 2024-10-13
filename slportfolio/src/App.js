/** @format */

import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SingleProject from './pages/singleProjects';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/projects"
					element={<Projects />}
				/>
				<Route
					path="/projects/:slug"
					element={<SingleProject />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
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

export default App;
