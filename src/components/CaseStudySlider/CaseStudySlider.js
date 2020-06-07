import React from 'react'
import { SLIDES } from '../../constants/caseStudySlider'
import CaseStudySliderPanel from './CaseStudySliderPanel'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CaseStudySlider = () => {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// centerMode: true,
		// centerPadding: '200px',
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
							<div className="CaseStudySlider__slide-inner">
								<img src={slide.img} alt="Test" />
								<CaseStudySliderPanel
									heading={slide.heading}
									desc={slide.desc}
									link={slide.link}
								/>
							</div>
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export default CaseStudySlider
