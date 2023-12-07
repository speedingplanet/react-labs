import React from 'react';

function SortIndicator({ sortConfig, currentField }) {
	if (sortConfig.sortField !== currentField) {
		return '';
	}

	return sortConfig.sortDirection === 'asc' ? '⏫' : '⏬';
}

export default SortIndicator;
