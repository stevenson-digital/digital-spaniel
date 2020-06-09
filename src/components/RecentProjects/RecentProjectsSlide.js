import React from 'react'
import PropTypes from 'prop-types'
import RecentProjectsProject from './RecentProjectsProject'

const RecentProjectsSlide = (props) => {
	const { projects } = props

	return (
		<div className="RecentProjectsSlide">
			{projects.map(function (project, index) {
				return <RecentProjectsProject key={'project-' + index} project={project} />
			})}
		</div>
	)
}

export default RecentProjectsSlide

RecentProjectsSlide.propTypes = {
	projects: PropTypes.array.isRequired,
}
