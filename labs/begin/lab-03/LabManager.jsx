import React from 'react';
import './LabManager.css';
import Lab03 from './Lab03.jsx';

const LabManager = () => {
	return (
		<>
			<h2>Lab 3</h2>
			<section className="lab-container">
				<nav></nav>
				<div>
					<Lab03 />
				</div>
			</section>
		</>
	);
};

export default LabManager;
