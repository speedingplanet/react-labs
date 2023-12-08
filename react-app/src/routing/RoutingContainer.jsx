import React from 'react';
import './RoutingContainer.css';
import { Link, Route, Routes } from 'react-router-dom';

function RoutingContainer() {
	return (
		<>
			<header>
				<h3>Routing Experiments</h3>
			</header>
			<div className="routing-container">
				<nav className="left">
					<ul>
						<li>
							<Link to="/routing/first">First</Link>
						</li>
						<li>
							<Link to="/routing/second">Second</Link>
						</li>
						<li>
							<Link to="/routing/third">Third</Link>
						</li>
					</ul>
				</nav>
				<div className="right">
					<Routes>
						<Route
							path="first"
							element={<First />}
						/>
						<Route
							path="second"
							element={<Second />}
						/>
						<Route
							path="third"
							element={<Third />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default RoutingContainer;

function First() {
	return <div>First</div>;
}

function Second() {
	return <div>Second</div>;
}

function Third() {
	return <div>Third</div>;
}
