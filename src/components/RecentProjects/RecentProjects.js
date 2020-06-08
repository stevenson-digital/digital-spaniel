import React, { useState } from 'react'
import Heading from '../Heading'
import RecentProjectsFilters from './RecentProjectsFilters'
import RecentProjectsSlider from './RecentProjectsSlider'
import { PROJECTS } from '../../constants/projects'

const RecentProjects = () => {
	const [slides, setSlides] = useState(PROJECTS)

	const handleFilterProjects = (filter) => {
		console.log('filter by: ' + filter)
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
