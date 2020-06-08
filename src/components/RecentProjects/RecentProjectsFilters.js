import React from 'react'
import { PROJECT_FILTERS } from '../../constants/projects'

const RecentProjectsFilters = (props) => {
	const { filterCallback } = props

	const handleFilter = (filter) => {
		filterCallback(filter)
	}

	return (
		<div className="RecentProjectsFilters">
			<span className="RecentProjectsFilters__indicator" />
			{PROJECT_FILTERS.map((filter, index) => {
				return (
					<button
						className="RecentProjectsFilters__btn f-os-regular-20-18 u-btn-clear active"
						onClick={() => handleFilter(filter.slug)}
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
