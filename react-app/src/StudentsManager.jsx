import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import StudentsGrid from './students-grid/StudentsGrid';
import SearchStudents from './search-students/SearchStudents';
import './StudentsManager.css';

function StudentsManager() {
	return (
		<>
			<h2>Students</h2>
			<p>Accessing our student information</p>
			<nav className="navbar mb-1">
				<ul>
					<li>
						<NavLink to="/students/students-grid">Students grid</NavLink>
					</li>
					<li>
						<NavLink to="/students/search-students">Search students</NavLink>
					</li>
				</ul>
			</nav>
			<section>
				<Routes>
					<Route
						path="/students-grid"
						element={<StudentsGrid />}
					/>
					<Route
						path="/search-students"
						element={<SearchStudents />}
					/>
				</Routes>
			</section>
		</>
	);
}

export default StudentsManager;
