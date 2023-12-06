import React from 'react';

/*
Build an unordered list of students

Import students from src/data/students.json

Below the <h3>, create an unordered list. Within the list, iterate over the 
students array, printing out the first and last name of each student.
Don't forget to add a key attribute to the <li> as well!

Check out your code in the browser to see if it works.
*/
function ListStudentsExplained() {
	let students = [
		{ id: 1, firstName: 'Steph', lastName: 'Medina' },
		{ id: 2, firstName: 'TaLea', lastName: 'Carpenter' },
		{ id: 3, firstName: 'Zhigang', lastName: 'Lin' },
		{ id: 4, firstName: 'Kumar', lastName: 'Vannela' },
	];

	/*
	for (let student of students) {
		// console.log(student.firstName + ' ' + student.lastName);
		console.log(`${student.firstName}  ${student.lastName}`);
	}

	let studentNames = [];
	let studentListItems = [];
	for (let student of students) {
		let name = `${student.firstName}  ${student.lastName}`;
		studentNames.push(name);

		let listItem = (
			<li>
				{student.firstName} {student.lastName}
			</li>
		);
		studentListItems.push(listItem);
	}

	let studentNames = students.map(function (student) {
		return `${student.firstName}  ${student.lastName}`;
	});

	let studentNames = students.map(
		(student) => `${student.firstName}  ${student.lastName}`,
	);

	let studentListItems = students.map((student) => (
		<li key={student.lastName}>
			{student.firstName} {student.lastName}
		</li>
	));

	console.log(studentNames);
	console.log(studentListItems);
	*/

	return (
		<div>
			<h3>Students</h3>
			{/* <p>Trying to add {studentNames.join(', ')} to the list below:</p> */}
			<ul>
				<li>John Paxton</li>
				{students.map((student) => (
					<li key={student.id}>
						{student.firstName} {student.lastName}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListStudentsExplained;
