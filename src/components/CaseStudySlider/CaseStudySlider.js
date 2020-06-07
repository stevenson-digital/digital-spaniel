import React, { Component } from 'react'
import { SLIDES } from '../../constants/caseStudySlider'
import CaseStudySliderPanel from './CaseStudySliderPanel'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class CaseStudySlider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentIndex: 0,
			currentHeading: SLIDES[0].heading,
			currentDesc: SLIDES[0].desc,
			currentLink: SLIDES[0].link,
		}

		this.next = this.next.bind(this)
		this.previous = this.previous.bind(this)
		this.handleChangeSlide = this.handleChangeSlide.bind(this)
	}

	next() {
		this.slider.slickNext()
	}

	previous() {
		this.slider.slickPrev()
	}

	handleChangeSlide(direction) {
		// Change slick slide
		direction === 'next' ? this.next() : this.previous()

		// Change text panel
		const delay = direction === 'next' ? 500 : 300
		setTimeout(() => {
			this.setState({
				currentHeading: SLIDES[this.state.currentIndex].heading,
				currentDesc: SLIDES[this.state.currentIndex].desc,
				currentLink: SLIDES[this.state.currentIndex].link,
			})
		}, delay)
	}

	handleUpdateCurrentIndex(current, next) {
		this.setState({ currentIndex: next })
	}

	render() {
		const settings = {
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)',
			speed: 700,
			beforeChange: (current, next) => this.handleUpdateCurrentIndex(current, next),
		}

		return (
			<div className="CaseStudySlider">
				<Slider ref={c => (this.slider = c)} {...settings}>
					{SLIDES.map((slide, index) => {
						return (
							<div
								className="CaseStudySlider__slide"
								key={'case-study-slide-' + index}
							>
								<div className="CaseStudySlider__slide-inner">
									<img src={slide.img} alt="Test" />
								</div>
							</div>
						)
					})}
				</Slider>
				<CaseStudySliderPanel
					changeSlide={this.handleChangeSlide}
					heading={this.state.currentHeading}
					desc={this.state.currentDesc}
					link={this.state.currentLink}
				/>
			</div>
		)
	}
}
