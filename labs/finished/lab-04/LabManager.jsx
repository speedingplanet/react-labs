import React from 'react';
import './LabManager.css';
import Calculator from './Calculator';
import CalculatorFinished from './finished/Calculator';
import { Link, Route, Routes } from 'react-router-dom';

const LabManager = () => {
	return (
		<>
			<h2>Lab 4: Testing!</h2>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/labs/yours">Yours</Link>
					</li>
					<li>
						<Link to="/labs/finished">Finished</Link>
					</li>
				</ul>
			</nav>
			<section className="lab-container">
				<Routes>
					<Route
						path="/yours"
						element={<Calculator />}
					/>
					<Route
						path="/finished"
						element={<CalculatorFinished />}
					/>
				</Routes>
			</section>
		</>
	);
};

export default LabManager;
