import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';

/*
Searching on address.country
What URL / address are we querying?
Gather search criteria from the form
Send it to the API
Do we tell the API to sort?

Part One:
Design and implement a form with a drop-down of three countries 
(US, UK, Canada) And a button labeled "Search".

When the user clicks on the Search button, log to the console
which country they searched on.

*/

const GET_STUDENTS_BY_COUNTRY = gql`
	query QueryStudentsByCountry($searchCountry: String!) {
		students(country: $searchCountry) {
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

function SearchStudents() {
	const [country, setCountry] = useState('');
	const [queryRunner, { loading, error, data }] = useLazyQuery(
		GET_STUDENTS_BY_COUNTRY,
	);

	if (loading) return <p>Querying students....</p>;
	if (error) return <p>Error: {error.message}</p>;

	function handleSearchButton() {
		console.log(`You want to search on ${country}`);
		queryRunner({ variables: { searchCountry: country } });
	}

	function handleSelectCountry(event) {
		setCountry(event.currentTarget.value);
	}

	return (
		<div>
			<h3>SearchStudents</h3>
			<div>
				<label htmlFor="country">Choose a country:</label>
				<select
					name="country"
					id="country"
					value={country}
					onChange={handleSelectCountry}
				>
					<option value="">Countries:</option>
					<option>United States</option>
					<option>Canada</option>
					<option>United Kingdom</option>
				</select>
				<button
					type="button"
					onClick={handleSearchButton}
				>
					Search
				</button>
			</div>
			{data && data.students ? (
				<div>
					<ul>
						{data.students.map((student) => (
							<li key={student.id}>
								{student.firstName} {student.lastName} from{' '}
								{student.address.country}
							</li>
						))}
					</ul>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default SearchStudents;
