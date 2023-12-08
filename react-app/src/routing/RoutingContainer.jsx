import React from 'react';
import './RoutingContainer.css';
import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom';

function RoutingContainer() {
	let secondName = 'Gurveer';
	return (
		<Routes>
			<Route
				path="/"
				element={<RoutingOutlet />}
			>
				<Route
					path="products/:productId"
					element={<ProductDetails />}
				/>

				<Route
					path="first"
					element={<First />}
				/>
				<Route
					path="second"
					element={<Second name={secondName} />}
				/>
				<Route
					path="third"
					element={<Third />}
				/>
			</Route>
		</Routes>
	);
}

function RoutingOutlet() {
	return (
		<>
			<header>
				<h3>Routing Experiments</h3>
			</header>
			<div className="routing-container">
				<nav className="left">
					<ul>
						<li>
							<Link to="first">First</Link>
						</li>
						<li>
							<Link to="second">Second</Link>
						</li>
						<li>
							<Link to="third">Third</Link>
						</li>
						<li>
							<Link to="products/1">Product 1</Link>
						</li>
						<li>
							<Link to="products/5">Product 5</Link>
						</li>
						<li>
							<Link to="products/8">Product 8</Link>
						</li>
						<li>
							<Link to="products/4">Product 4</Link>
						</li>
					</ul>
				</nav>
				<div className="right">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default RoutingContainer;

function ProductDetails() {
	let { productId } = useParams();
	return <div>You want to see product #{productId}</div>;
}

function First() {
	return <div>First</div>;
}

function Second({ name }) {
	return <div>Hello, {name ?? 'world'}</div>;
}

function Third() {
	return <div>Third</div>;
}
