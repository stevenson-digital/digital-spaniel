import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PROJECT_FILTERS } from '../../constants/projects'

const RecentProjectsFilters = (props) => {
	const { filterCallback } = props
	const [positionModifier, setPositionModifier] = useState('position-0')
	const [activeFilter, setActiveFilter] = useState(0)
	const [selectedOption, setSelectedOption] = useState(null)

	const handleFilter = (filter, index) => {
		console.log(filter)
		// Set active filter
		setActiveFilter(index)

		// Move indicator
		setPositionModifier('position-' + index)

		// Filter projects
		filterCallback(filter)
	}

	const handleSelectChange = (e) => {
		const filter = e.target.value
		setSelectedOption(filter)
		handleFilter(filter, 0)
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
			<select
				value={selectedOption}
				className="RecentProjectsFilters__dropdown"
				onChange={handleSelectChange}
			>
				{PROJECT_FILTERS.map((filter, index) => {
					return (
						<option key={`filter-btn-${index}`} value={filter.slug}>
							{filter.name}
						</option>
					)
				})}
			</select>
		</div>
	)
}

RecentProjectsFilters.propTypes = {
	filterCallback: PropTypes.func.isRequired,
}

export default RecentProjectsFilters
