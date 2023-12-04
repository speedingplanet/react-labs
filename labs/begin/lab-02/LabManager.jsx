import React from 'react';
import './LabManager.css';
import Lab02 from './Lab02.jsx';

const LabManager = () => {
	return (
		<>
			<h2>Lab 2</h2>
			<section className="lab-container">
				<nav></nav>
				<div>
					<Lab02 />
				</div>
			</section>
		</>
	);
};

export default LabManager;
