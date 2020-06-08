import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import ProjectThumbnailText from '../ProjectThumbnailText'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class RecentProjectsSlider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			slides: this.props.slides,
		}
	}

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
		}

		return (
			<div className="RecentProjectsSlider">
				<Slider {...settings}>
					{this.state.slides.map(function (slide, index) {
						return (
							<div
								className="RecentProjectsSlider__slide"
								key={'project-slide-' + slide}
							>
								<img src={slide.img} alt={`Thumbnail for ${slide.title}`} />
								<h3>{slide.title}</h3>
								<ProjectThumbnailText
									heading={slide.title}
									desc={slide.desc}
									link={slide.link}
									linkText="Full project"
								/>
							</div>
						)
					})}
				</Slider>
			</div>
		)
	}
}

RecentProjectsSlider.propTypes = {
	slides: PropTypes.array,
}
