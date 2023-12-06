import React from 'react';
import { students } from '../data/students.json';
import './StudentsGrid.css';

function StudentsGrid() {
	console.log(`There are ${students.length} students`);

	return (
		<section className="students-grid">
			<div className="students-grid-cell header-cell">First Name</div>
			<div className="students-grid-cell header-cell">Last Name</div>
			{students.map((student) => {
				return (
					<div
						className="students-grid-row"
						key={student.id}
					>
						<div className="students-grid-cell">{student.firstName}</div>
						<div className="students-grid-cell">{student.lastName}</div>
					</div>
				);
			})}
		</section>
	);
}

export default StudentsGrid;
