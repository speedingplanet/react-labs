import React from 'react';
import SortIndicator from './SortIndicator';

/*
Adding custom events

Based on a Parent-Child component relationship.
The Parent owns the callback
The Child receives the callback and invokes it at some point

The Child component makes a callback available as a prop
Think onVerbNoun, or onNounVerb
And invokes the callback when a some standard DOM event happens 
(click, input, blur, whatever)

The Parent writes the callback function and then passes a reference
(no parentheses!) into the Child component as one of its props
*/

function StudentsGridHeader({ columns, onHeaderClick, sortConfig }) {
	return (
		<>
			{columns.map((column) => (
				<div
					className="students-grid-cell header-cell"
					key={column.field}
					onClick={() => onHeaderClick(column.field)}
				>
					{column.label}{' '}
					{/*sortConfig.sortField === column.field
						? sortConfig.sortDirection === 'asc'
							? '⏫'
							: '⏬'
			: '' */}
					<SortIndicator
						sortConfig={sortConfig}
						currentField={column.field}
					/>
				</div>
			))}
		</>
	);
}

export default StudentsGridHeader;
