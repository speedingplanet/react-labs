import React from 'react';

function StudentsGridHeader({ columns }) {
	function handleHeaderClick(sortField) {
		console.log(`You clicked on the ${sortField} header.`);
	}

	return (
		<>
			{columns.map((column) => (
				<div
					className="students-grid-cell header-cell"
					key={column.field}
					onClick={() => handleHeaderClick(column.field)}
				>
					{column.label}
				</div>
			))}
		</>
	);
}

export default StudentsGridHeader;
