// @ts-check
import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CalculatorDisplay from './CalculatorDisplay';

test('Smoke test', () => {
	expect(1 + 1).toBe(2);
});

/*
###################################################################
# Part 1
###################################################################

Write a test that loads and displays CalculatorDisplay

`render` to render CalculatorDisplay (pass whatever values you'd like for attributes)

Try expecting that something with the text '+' is not null, or 
in the document.

Save and make sure it works by having `npm run test` running in a terminal
*/

/*
###################################################################
# Part 2
###################################################################

Add a test to ensure that the display is doing math correctly

Use the `container` feature with `querySelector` against the eleement with the
class "result" to check the results.

Or get to that information a different way, if you're feeling creative.

Go to Calculator.test.jsx for Part 3
*/
