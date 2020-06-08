import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

const CaseStudySliderPanel = (props) => {
	const { heading, desc, link, changeSlide } = props
	const [isAnimating, setIsAnimating] = useState(false)

	const handleChangeSlide = (direction) => {
		setIsAnimating(true)
		changeSlide(direction)
		setTimeout(() => {
			// Change to a callback using Slick API 'afterChange' from parent
			setIsAnimating(false)
		}, 700)
	}

	return (
		<div
			className={
				'CaseStudySliderPanel' +
				(isAnimating ? ' CaseStudySliderPanel--is-animating' : '')
			}
		>
			<div className="CaseStudySliderPanel__offset" />
			<div className="CaseStudySliderPanel__inner">
				<h3 className="CaseStudySliderPanel__heading f-agg-24-20">{heading}</h3>
				<p className="CaseStudySliderPanel__desc f-os-regular-18-14">{desc}</p>
				<Link link={link} linkText="Read more" modifiers="Link--white" />
			</div>
			<div className="CaseStudySliderPanel__buttons">
				<button
					className="CaseStudySliderPanel__button u-btn-clear"
					onClick={() => handleChangeSlide('prev')}
				>
					<svg x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 65.040064,1001.956 a 3.0003,3.0003 0 0 0 -0.8125,-1.6563 l -23.99999,-25.00003 a 3.0003,3.0003 0 1 0 -4.3438,4.125 l 22.03129,22.93753 -22.03129,22.9375 a 3.0003,3.0003 0 1 0 4.3438,4.125 l 23.99999,-25 a 3.0003,3.0003 0 0 0 0.8125,-2.4687 z" fill="#000000" fillOpacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>
				</button>
				<button
					className="CaseStudySliderPanel__button u-btn-clear"
					onClick={() => handleChangeSlide('next')}
				>
					<svg x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 65.040064,1001.956 a 3.0003,3.0003 0 0 0 -0.8125,-1.6563 l -23.99999,-25.00003 a 3.0003,3.0003 0 1 0 -4.3438,4.125 l 22.03129,22.93753 -22.03129,22.9375 a 3.0003,3.0003 0 1 0 4.3438,4.125 l 23.99999,-25 a 3.0003,3.0003 0 0 0 0.8125,-2.4687 z" fill="#000000" fillOpacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>
				</button>
			</div>
		</div>
	)
}

CaseStudySliderPanel.propTypes = {
	heading: PropTypes.string,
	desc: PropTypes.string,
	link: PropTypes.string,
	changeSlide: PropTypes.func,
}

export default CaseStudySliderPanel
