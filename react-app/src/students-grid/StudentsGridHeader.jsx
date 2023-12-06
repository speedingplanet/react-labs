import React from 'react';

function StudentsGridHeader({ columns }) {
	return (
		<>
			{columns.map((column) => (
				<div
					className="students-grid-cell header-cell"
					key={column.field}
				>
					{column.label}
				</div>
			))}
		</>
	);
}

export default StudentsGridHeader;
