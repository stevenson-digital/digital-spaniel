import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import RecentProjectsSlide from './RecentProjectsSlide'
import Link from '../Link'
import SliderBtn from '../SliderBtn'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class RecentProjectsSlider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			slides: this.props.slides,
			slideIsAnimating: false,
		}

		this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
		this.handleChangeSlide = this.handleChangeSlide.bind(this)
		this.renderButtons = this.renderButtons.bind(this)
	}

	next() {
		this.slider.slickNext()
	}

	previous() {
		this.slider.slickPrev()
	}

	handleChangeSlide(direction) {
		// Animate the projects out
		this.setState({ slideIsAnimating: true })

		setTimeout(() => {
			// Change slick slide
			direction === 'next' ? this.next() : this.previous()

			// Animate the projects back in
			this.setState({ slideIsAnimating: false })
		}, 400)
	}

	componentDidUpdate(prevProps) {
		// Re-render when props change
		if (prevProps.slides !== this.props.slides) {
			this.setState({ slides: this.props.slides })
		}
	}

	renderButtons() {
		if (this.state.slides.length > 1) {
			return (
				<div className="RecentProjectsSlider__buttons">
					<SliderBtn callback={() => this.handleChangeSlide('prev')} />
					<SliderBtn
						callback={() => this.handleChangeSlide('next')}
						arrowDirection="right"
					/>
				</div>
			)
		}
	}

	render() {
		const settings = {
			infinite: true,
			speed: 0,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
		}

		return (
			<div className="RecentProjectsSlider">
				<Slider ref={c => (this.slider = c)} {...settings}>
					{this.state.slides.map((projects, index) => {
						return (
							<div
								className={
									'RecentProjectsSlider__slide' +
									(this.state.slideIsAnimating ? ' is-animating' : '')
								}
								key={'project-slide-' + index}
							>
								<RecentProjectsSlide projects={projects} />
							</div>
						)
					})}
				</Slider>
				<div className="RecentProjectsSlider__actions">
					<Link linkText="View all" />
					{this.renderButtons()}
				</div>
			</div>
		)
	}
}

RecentProjectsSlider.propTypes = {
	slides: PropTypes.array,
}
