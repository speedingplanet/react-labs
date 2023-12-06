import React from 'react';
import './LabManager.css';
import StudentsGrid from '../students-grid/StudentsGrid';

const LabManager = () => {
	return (
		<>
			<h2>Lab 9: Students Grid</h2>
			<section className="lab-container">
				<StudentsGrid />
			</section>
		</>
	);
};

export default LabManager;
