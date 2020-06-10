import React from 'react'
import PropTypes from 'prop-types'

const Testimonial = (props) => {
	const { quote, img, name, jobTitle } = props

	return (
		<div className="Testimonial">
			<p className="Testimonial__quote f-os-semibold-italic-26-20">{quote}</p>
			<div className="Testimonial__bottom">
				<img className="Testimonial__img" src={img} alt={`${name}`} />
				<p className="Testimonial__name f-os-bold-21-18">{name}</p>
				<p className="Testimonial__job-title f-os-regular-21-18">{jobTitle}</p>
			</div>
		</div>
	)
}

Testimonial.propTypes = {
	quote: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	jobTitle: PropTypes.string.isRequired,
}

export default Testimonial
