import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

const CaseStudySliderPanel = (props) => {
	const { heading, desc, link } = props

	return (
		<div className="CaseStudySliderPanel">
			<h3 className="CaseStudySliderPanel__heading f-agg-24-20">{heading}</h3>
			<p className="CaseStudySliderPanel__desc f-os-regular-18-16">{desc}</p>
			<Link link={link} linkText="Read more" modifiers="Link--white" />
		</div>
	)
}

CaseStudySliderPanel.propTypes = {
	heading: PropTypes.string,
	desc: PropTypes.string,
	link: PropTypes.string,
}

export default CaseStudySliderPanel
