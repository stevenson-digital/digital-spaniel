import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import RecentProjectsSlide from './RecentProjectsSlide'
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
			slidesToShow: 1,
			slidesToScroll: 1,
		}

		return (
			<div className="RecentProjectsSlider">
				<Slider {...settings}>
					{this.state.slides.map((projects, index) => {
						return (
							<div
								className="RecentProjectsSlider__slide"
								key={'project-slide-' + index}
							>
								<RecentProjectsSlide projects={projects} />
							</div>
						)
					})}
				</Slider>
				<div className="RecentProjectsSlider__buttons">
					{/* Hide buttons if only 1 slide */}
				</div>
			</div>
		)
	}
}

RecentProjectsSlider.propTypes = {
	slides: PropTypes.array,
}
