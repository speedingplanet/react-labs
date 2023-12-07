import React, { useState } from 'react';
import { students } from '../data/students.json';
import { orderBy } from 'lodash';
import './StudentsGrid.css';
import StudentsGridHeader from './StudentsGridHeader';
import StudentsGridBody from './StudentsGridBody';

function StudentsGrid() {
	const [sortField, setSortField] = useState('');

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
			label: 'City',
			field: 'address.city',
		},
		{
			label: 'State/Province',
			field: 'address.province',
		},
		{
			label: 'Country',
			field: 'address.country',
		},
	];

	function handleHeaderClick(sortField) {
		setSortField(sortField);
	}

	let sortedStudents = orderBy(students, sortField);

	return (
		<section
			className="students-grid"
			style={{ '--header-column-width': `${100 / columns.length}%` }}
		>
			<StudentsGridHeader
				columns={columns}
				onHeaderClick={handleHeaderClick}
			/>
			<StudentsGridBody
				columns={columns}
				students={sortedStudents}
			/>
		</section>
	);
}

export default StudentsGrid;
