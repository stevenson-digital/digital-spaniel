import React, { useState } from 'react'
import Heading from '../Heading'
import RecentProjectsFilters from './RecentProjectsFilters'
import RecentProjectsSlider from './RecentProjectsSlider'
import { PROJECTS } from '../../constants/projects'
import chunk from 'lodash/chunk'

function filterProjects(projects, filter) {
	// const chunkedProjects = projects.filter((type) => filters.includes(area))
	return projects
	// return projects.filter(({ bodyAreas }) => inFilters(bodyAreas, filters))
}

const RecentProjects = () => {
	const [slides, setSlides] = useState(chunk(filterProjects(PROJECTS, 'all'), 5))

	const handleFilterProjects = (filter) => {
		setSlides(chunk(filterProjects(PROJECTS, filter), 5))
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
