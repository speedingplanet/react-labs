import React from 'react';
import './RoutingContainer.css';

function RoutingContainer() {
	return (
		<>
			<header>
				<h3>Routing Experiments</h3>
			</header>
			<div className="routing-container">
				<nav className="left"></nav>
				<div className="right"></div>
			</div>
		</>
	);
}

export default RoutingContainer;
