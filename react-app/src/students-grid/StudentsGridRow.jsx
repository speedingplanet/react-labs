import React from 'react';
import { get } from 'lodash';

function StudentsGridRow({ student, columns }) {
	return (
		<div className="students-grid-row">
			{/* Loop over the fields we should display from this student */}
			{columns.map((column) => (
				<div
					className="students-grid-cell"
					key={column.field}
				>
					{/* {student[column.field]} */}
					{/* get(student, 'address.city') */}
					{get(student, column.field)}
				</div>
			))}
		</div>
	);
}

export default StudentsGridRow;
