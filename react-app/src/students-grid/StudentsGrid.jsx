import React from 'react';
import { students } from '../data/students.json';
import './StudentsGrid.css';

function StudentsGrid() {
	console.log(`There are ${students.length} students`);

	let headers = ['First Name', 'Last Name', 'City', 'State/Province'];

	return (
		<section
			className="students-grid"
			style={{ '--header-column-width': `${100 / headers.length}%` }}
		>
			{headers.map((header) => (
				<div
					className="students-grid-cell header-cell"
					key={header}
				>
					{header}
				</div>
			))}

			{students.map((student) => {
				return (
					<div
						className="students-grid-row"
						key={student.id}
					>
						<div className="students-grid-cell">{student.firstName}</div>
						<div className="students-grid-cell">{student.lastName}</div>
						<div className="students-grid-cell">{student.address.city}</div>
					</div>
				);
			})}
		</section>
	);
}

export default StudentsGrid;
