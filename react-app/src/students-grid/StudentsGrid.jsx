import React from 'react';
import { students } from '../data/students.json';
import './StudentsGrid.css';
import StudentsGridHeader from './StudentsGridHeader';
import StudentsGridBody from './StudentsGridBody';

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
			<StudentsGridHeader columns={columns} />
			<StudentsGridBody
				columns={columns}
				students={students}
			/>
		</section>
	);
}

export default StudentsGrid;
