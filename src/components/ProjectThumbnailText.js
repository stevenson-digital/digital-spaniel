import React from 'react'
import Link from './Link'

const ProjectThumbnailText = (props) => {
	const { heading, desc, link, linkText } = props

	return (
		<div className="ProjectThumbnailText">
			<h3 className="ProjectThumbnailText__heading f-agg-24-20">{heading}</h3>
			<p className="ProjectThumbnailText__desc f-os-regular-18-14">{desc}</p>
			<Link link={link} linkText={linkText} modifiers="Link--white" />
		</div>
	)
}

export default ProjectThumbnailText
