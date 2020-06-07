import React from 'react'
import { SLIDES } from '../constants/caseStudySlider'
import Link from './Link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CaseStudySlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div className="CaseStudySlider">
			<Slider {...settings}>
				{SLIDES.map((slide, index) => {
					return (
						<div
							className="CaseStudySlider__slide"
							key={'case-study-slide-' + index}
						>
							<img src={slide.img} alt="Test" />
							<div className="CaseStudySlider__panel">
								<h3>{slide.heading}</h3>
								<p>{slide.desc}</p>
								<Link linkText="Read more" modifiers="Link--white" />
							</div>
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export default CaseStudySlider
