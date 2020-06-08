import React, { useState } from 'react'
import { PROJECT_FILTERS } from '../../constants/projects'

const RecentProjectsFilters = (props) => {
	const { filterCallback } = props
	const [positionModifier, setPositionModifier] = useState('position-0')

	const handleFilter = (filter, index) => {
		// Move indicator
		setPositionModifier('position-' + index)

		// Filter projects
		filterCallback(filter)
	}

	return (
		<div className="RecentProjectsFilters">
			<span
				className={
					'RecentProjectsFilters__indicator ' +
					(positionModifier ? positionModifier : '')
				}
			/>
			{PROJECT_FILTERS.map((filter, index) => {
				return (
					<button
						className="RecentProjectsFilters__btn f-os-regular-20-18 u-btn-clear active"
						onClick={() => handleFilter(filter.slug, index)}
						key={`filter-btn-${index}`}
					>
						{filter.name}
					</button>
				)
			})}
		</div>
	)
}

export default RecentProjectsFilters
