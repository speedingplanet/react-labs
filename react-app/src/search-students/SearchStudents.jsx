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

function SearchStudents() {
	const [country, setCountry] = useState('');

	function handleSearchButton() {
		console.log(`You want to search on ${country}`);
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
		</div>
	);
}

export default SearchStudents;
