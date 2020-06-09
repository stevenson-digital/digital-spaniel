import React from 'react'
import PropTypes from 'prop-types'
import ProjectThumbnailText from '../ProjectThumbnailText'

const RecentProjectsProject = (props) => {
	const { project } = props

	return (
		<div className="RecentProjectsProject">
			<img src={project.img} alt={`Thumbnail for ${project.title}`} />
			<h3>{project.title}</h3>
			<ProjectThumbnailText
				heading={project.title}
				desc={project.desc}
				link={project.link}
				linkText="Full project"
			/>
		</div>
	)
}

export default RecentProjectsProject

RecentProjectsProject.propTypes = {
	project: PropTypes.object.isRequired,
}
