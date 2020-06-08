import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PROJECT_FILTERS } from '../../constants/projects'

const RecentProjectsFilters = (props) => {
	const { filterCallback } = props
	const [positionModifier, setPositionModifier] = useState('position-0')
	const [activeFilter, setActiveFilter] = useState(0)

	const handleFilter = (filter, index) => {
		// Set active filter
		setActiveFilter(index)

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
						className={
							'RecentProjectsFilters__btn f-os-regular-20-18 u-btn-clear' +
							(activeFilter === index ? ' active' : '')
						}
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

RecentProjectsFilters.propTypes = {
	filterCallback: PropTypes.func.isRequired,
}

export default RecentProjectsFilters
