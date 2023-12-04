import React from 'react';
import './LabManager.css';
import Calculator from './Calculator';

const LabManager = () => {
	return (
		<>
			<h2>Lab 1</h2>
			<section className="lab-container">
				<nav></nav>
				<div>
					<Calculator />
				</div>
			</section>
		</>
	);
};

export default LabManager;
