import React from 'react';
import './LabManager.css';
import ListStudents from './ListStudents';
import ListStudentsFinished from './finished/ListStudents';
import { Link, Route, Routes } from 'react-router-dom';

const LabManager = () => {
	return (
		<>
			<h2>Lab 8: Listing data</h2>
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
						element={<ListStudents />}
					/>
					<Route
						path="/finished"
						element={<ListStudentsFinished />}
					/>
				</Routes>
			</section>
		</>
	);
};

export default LabManager;
