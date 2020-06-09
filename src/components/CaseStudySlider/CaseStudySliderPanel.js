import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ProjectThumbnailText from '../ProjectThumbnailText'
import SliderBtn from '../SliderBtn'

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
				<ProjectThumbnailText
					heading={heading}
					desc={desc}
					link={link}
					linkText="Read more"
				/>
			</div>
			<div className="CaseStudySliderPanel__buttons">
				<SliderBtn callback={() => handleChangeSlide('prev')} />
				<SliderBtn
					callback={() => handleChangeSlide('next')}
					arrowDirection="right"
				/>
			</div>
		</div>
	)
}

CaseStudySliderPanel.propTypes = {
	heading: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	changeSlide: PropTypes.func.isRequired,
}

export default CaseStudySliderPanel
