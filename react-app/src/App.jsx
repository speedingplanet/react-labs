import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import LabManager from './labs/LabManager';
import './App.css';
import StudentsManager from './StudentsManager';

function App() {
	return (
		<main>
			<header>
				<h1>React Labs</h1>
			</header>
			<BrowserRouter>
				<nav className="navbar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/labs">Labs</Link>
						</li>
						<li>
							<Link to="/students">Students</Link>
						</li>
					</ul>
				</nav>
				<hr style={{ marginTop: '5px' }} />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="labs/*"
						element={<LabManager />}
					/>
					<Route
						path="students/*"
						element={<StudentsManager />}
					/>
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
