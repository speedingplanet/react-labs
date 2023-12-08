import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
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

const GET_STUDENTS = gql`
	query GetStudents {
		students {
			firstName
			lastName
			id
			address {
				city
				province
				country
			}
		}
	}
`;

function StudentsGrid() {
	const [sortConfig, setSortConfig] = useState(initialState);
	const { loading, error, data } = useQuery(GET_STUDENTS);

	// Deal with loading, errors, or no request being made
	if (loading) return <p>Loading students...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!data) return <p>No requests made</p>;

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

	let students = data.students;

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
				sortConfig={sortConfig}
			/>
			<StudentsGridBody
				columns={columns}
				students={sortedStudents}
			/>
		</section>
	);
}

export default StudentsGrid;
