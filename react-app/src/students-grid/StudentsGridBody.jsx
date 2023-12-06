import React from 'react';
import StudentsGridRow from './StudentsGridRow';

function StudentsGridBody({ students, columns }) {
	return (
		<>
			{/* Loop over each student */}
			{students.map((student) => (
				<StudentsGridRow
					key={student.id}
					columns={columns}
					student={student}
				/>
			))}
		</>
	);
}

export default StudentsGridBody;
