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
		</div>
	);
}

export default App;
