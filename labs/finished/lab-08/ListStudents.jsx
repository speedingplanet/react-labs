import React from 'react';
import { students } from 'src/data/students.json';

/*
Build an unordered list of students

Import students from src/data/students.json

Below the <h3>, create an unordered list. Within the list, iterate over the 
students array, printing out the first and last name of each student.
Don't forget to add a key attribute to the <li> as well!

Check out your code in the browser to see if it works.
*/
function ListStudents() {
	return (
		<div>
			<h3>Students</h3>
			<ul>
				{students.map((student) => (
					<li key={student.id}>
						{student.firstName} {student.lastName}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListStudents;
