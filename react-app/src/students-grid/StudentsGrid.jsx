import React, { useState } from 'react';
import { students } from '../data/students.json';
import { orderBy } from 'lodash';
import './StudentsGrid.css';
import StudentsGridHeader from './StudentsGridHeader';
import StudentsGridBody from './StudentsGridBody';

/*
Tracking in state:
sortField
sortDirection

Rewrite handleHeaderClick to figure out what the correct next state is
*/

const initialState = {
	sortField: '',
	sortDirection: 'asc',
};

function StudentsGrid() {
	const [sortConfig, setSortConfig] = useState(initialState);

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

	function handleHeaderClick(nextSortField) {
		let nextSortDirection = '';

		if (sortConfig.sortField !== nextSortField) {
			nextSortDirection = 'asc';
		} else {
			if (sortConfig.sortDirection === 'asc') {
				nextSortDirection = 'desc';
			} else {
				nextSortDirection = 'asc';
			}
		}

		let nextSortConfig = {
			sortDirection: nextSortDirection,
			sortField: nextSortField,
		};

		setSortConfig(nextSortConfig);
	}

	let sortedStudents = orderBy(
		students,
		sortConfig.sortField,
		sortConfig.sortDirection,
	);

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
