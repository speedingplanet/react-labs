import React from 'react';
import './LabManager.css';
import ListStudents from './ListStudents';

const LabManager = () => {
	return (
		<>
			<h2>Lab 8: Listing data</h2>
			<section className="lab-container">
				<ListStudents />
			</section>
		</>
	);
};

export default LabManager;
