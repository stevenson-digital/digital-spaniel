import React from 'react'
import PropTypes from 'prop-types'
import ProjectThumbnailText from '../ProjectThumbnailText'

const RecentProjectsProject = (props) => {
	const { project } = props

	return (
		<div className="RecentProjectsProject">
			<img
				className="RecentProjectsProject__img"
				src={project.img}
				alt={`Thumbnail for ${project.title}`}
			/>
			<div className="RecentProjectsProject__gradient" />
			<div className="RecentProjectsProject__text">
				<ProjectThumbnailText
					heading={project.title}
					desc={project.desc}
					link={project.link}
					linkText="Full project"
				/>
			</div>
		</div>
	)
}

export default RecentProjectsProject

RecentProjectsProject.propTypes = {
	project: PropTypes.object.isRequired,
}
