import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import Link from './Link'

const HeadingTextLink = (props) => {
	const { headingType, headingLine1, headingLine2, text, link, linkText } = props

	return (
		<div className="HeadingTextLink">
			<div className="HeadingTextLink__heading">
				<Heading type={headingType} line1={headingLine1} line2={headingLine2} />
			</div>
			<p className="HeadingTextLink__text">{text}</p>
			<Link link={link} linkText={linkText} />
		</div>
	)
}

Heading.propTypes = {
	headingType: PropTypes.string,
	headingLine1: PropTypes.string,
	headingLine2: PropTypes.string,
	text: PropTypes.string,
	link: PropTypes.string,
	linkText: PropTypes.string,
}

Heading.defaultProps = {
	headingType: 'h2',
	headingLine1: 'Heading line 1',
	headingLine2: 'Heading line 2',
	text: 'Lorem ipsum',
	link: '/',
	linkText: 'Clickable Link',
}

export default HeadingTextLink
