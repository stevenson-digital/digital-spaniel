import React, { useState } from 'react'
import Heading from '../Heading'
import RecentProjectsFilters from './RecentProjectsFilters'
import RecentProjectsSlider from './RecentProjectsSlider'
import { PROJECTS } from '../../constants/projects'
import chunk from 'lodash/chunk'

function filterProjects(projects, filter) {
	if (filter === 'all') {
		return chunk(projects, 5)
	} else {
		const matches = projects.filter((project) => project.type.includes(filter))
		return chunk(matches, 5)
	}
}

const RecentProjects = () => {
	const [filter, setFilter] = useState('all')
	const [slides, setSlides] = useState(filterProjects(PROJECTS, filter))

	const handleFilterProjects = (filter) => {
		setFilter(filter)
		setSlides(filterProjects(PROJECTS, filter))
	}

	return (
		<div className="RecentProjects">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<Heading line1="Some of our" line2="recent projects" />
						<RecentProjectsFilters filterCallback={handleFilterProjects} />
						<RecentProjectsSlider slides={slides} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecentProjects
