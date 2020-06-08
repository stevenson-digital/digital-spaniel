import React, { useEffect } from 'react'
import ProjectThumbnailText from '../ProjectThumbnailText'
import PropTypes from 'prop-types'

const RecentProjectsSlide = (props) => {
	const { projects } = props

	useEffect(() => {
		console.log('running')
	})

	return (
		<div className="RecentProjectsSlide">
			{projects.map(function (project, index) {
				return (
					<div key={'project-' + index}>
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
			})}
		</div>
	)
}

export default RecentProjectsSlide

RecentProjectsSlide.propTypes = {
	projects: PropTypes.array,
}
