import React from 'react';
import './LabManager.css';
import Calculator from './Calculator';
import './Calculator.css';

const LabManager = () => {
	return (
		<>
			<h2>Lab 6: Testing state</h2>
			<section className="lab-container">
				<Calculator />
			</section>
		</>
	);
};

export default LabManager;
