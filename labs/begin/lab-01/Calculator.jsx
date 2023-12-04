import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';

function Calculator() {
	return (
		<div>
			<h3 style={{ textAlign: 'center' }}>Calculator</h3>
			<CalculatorDisplay
				lValue={5}
				rValue={10}
				operator="+"
			/>
		</div>
	);
}

export default Calculator;
