import React from 'react';
import { students } from '../data/students.json';
import './StudentsGrid.css';

function StudentsGrid() {
	console.log(`There are ${students.length} students`);

	let columns = [
		{
			label: 'First Name',
			field: 'firstName',
		},
		{
			label: 'Last Name',
			field: 'lastName',
		},
		{
			label: 'Student ID',
			field: 'id',
		},
	];

	return (
		<section
			className="students-grid"
			style={{ '--header-column-width': `${100 / columns.length}%` }}
		>
			{columns.map((column) => (
				<div
					className="students-grid-cell header-cell"
					key={column.field}
				>
					{column.label}
				</div>
			))}

			{/* Loop over each student */}
			{students.map((student) => {
				return (
					<div
						className="students-grid-row"
						key={student.id}
					>
						{/* Loop over the fields we should display from this student */}
						{columns.map((column) => (
							<div
								className="students-grid-cell"
								key={column.field}
							>
								{student[column.field]}
							</div>
						))}
					</div>
				);
			})}
		</section>
	);
}

export default StudentsGrid;
