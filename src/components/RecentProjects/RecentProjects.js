import React from 'react'
import Heading from '../Heading'
import RecentProjectsFilters from './RecentProjectsFilters'

const RecentProjects = () => {
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecentProjects
