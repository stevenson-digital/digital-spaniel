import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const SocialMediaIconLinks = (props) => {
	const { isSmall, isInBurger } = props
	const containerRef = useRef()

	useEffect(() => {
		if (isInBurger) handleAddMobileAddressBarPadding()
	})

	const getCssAsInt = ($el, property) =>
		Math.round(
			parseInt(window.getComputedStyle($el)[property].replace('px', ''))
		)

	const handleAddMobileAddressBarPadding = () => {
		const $el = containerRef.current
		const property = 'paddingBottom'

		// Clear inline style first (for resize)
		$el.style[property] = null

		// Set new inline style
		const currentValue = getCssAsInt($el, property)
		const difference = getCssAsInt(document.querySelector('.BurgerMenu'), 'height') - window.innerHeight

		$el.style[property] = currentValue + difference
	}

	return (
		<ul
			ref={containerRef}
			className={
				'SocialMediaIconLinks u-list-clear' +
				(isSmall ? ' SocialMediaIconLinks--small' : '') +
				(isInBurger ? ' SocialMediaIconLinks--burger' : '')
			}
		>
			<li className="SocialMediaIconLinks__li">
				<a target="_blank" href="https://facebook.com" rel="noopener noreferrer">
					<svg className="SocialMediaIconLinks__icon facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.23 15"><title>Facebook</title><path d="M0,5H1.55V3.46a4,4,0,0,1,.5-2.32A2.75,2.75,0,0,1,4.46,0,9.56,9.56,0,0,1,7.23.29l-.39,2.3A4.73,4.73,0,0,0,5.59,2.4c-.6,0-1.14.21-1.14.82V5H6.92L6.75,7.21H4.45V15H1.55V7.21H0Z"/></svg>
				</a>
			</li>
			<li className="SocialMediaIconLinks__li">
				<a target="_blank" href="https://twitter.com" rel="noopener noreferrer">
					<svg className="SocialMediaIconLinks__icon twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.45 15"><title>Twitter</title><path d="M18.45,1.78a7.76,7.76,0,0,1-2.17.59A3.75,3.75,0,0,0,17.94.28a7.61,7.61,0,0,1-2.4.92A3.78,3.78,0,0,0,10.19,1,3.82,3.82,0,0,0,9,3.79a4.2,4.2,0,0,0,.1.86,10.72,10.72,0,0,1-7.8-4A3.78,3.78,0,0,0,2.46,5.75,3.85,3.85,0,0,1,.74,5.28v0A3.79,3.79,0,0,0,3.78,9a3.71,3.71,0,0,1-1,.13,3.35,3.35,0,0,1-.71-.07,3.78,3.78,0,0,0,3.54,2.63,7.63,7.63,0,0,1-4.7,1.62,9.08,9.08,0,0,1-.91,0A10.77,10.77,0,0,0,16.57,4.23c0-.16,0-.33,0-.49a7.82,7.82,0,0,0,1.89-2"/></svg>
				</a>
			</li>
			<li className="SocialMediaIconLinks__li">
				<a target="_blank" href="https://instagram.com" rel="noopener noreferrer">
        	<svg className="SocialMediaIconLinks__icon insta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><title>Instagram</title><path d="M15,4.41a5.93,5.93,0,0,0-.35-1.82,3.84,3.84,0,0,0-2.2-2.2A5.65,5.65,0,0,0,10.59,0C9.79,0,9.54,0,7.5,0S5.21,0,4.41,0A5.65,5.65,0,0,0,2.59.39a3.84,3.84,0,0,0-2.2,2.2A5.93,5.93,0,0,0,0,4.41c0,.8,0,1,0,3.09s0,2.29,0,3.09a5.93,5.93,0,0,0,.35,1.82,3.8,3.8,0,0,0,2.2,2.19A5.4,5.4,0,0,0,4.41,15c.8,0,1,.05,3.09.05s2.29,0,3.09-.05a5.4,5.4,0,0,0,1.82-.35,3.8,3.8,0,0,0,2.2-2.19A5.93,5.93,0,0,0,15,10.59c0-.8,0-1.05,0-3.09S15,5.21,15,4.41ZM13.6,10.53a4.17,4.17,0,0,1-.25,1.4,2.5,2.5,0,0,1-1.43,1.42,4.33,4.33,0,0,1-1.39.26c-.79,0-1,0-3,0s-2.24,0-3,0a4.33,4.33,0,0,1-1.39-.26,2.5,2.5,0,0,1-1.43-1.42,4.17,4.17,0,0,1-.25-1.4c0-.79,0-1,0-3s0-2.24,0-3a4.07,4.07,0,0,1,.25-1.39A2.52,2.52,0,0,1,3.08,1.65,4.07,4.07,0,0,1,4.47,1.4c.79,0,1,0,3,0h0c2,0,2.24,0,3,0a4.07,4.07,0,0,1,1.39.25,2.52,2.52,0,0,1,1.43,1.43,4.11,4.11,0,0,1,.25,1.39c0,.79.05,1,.05,3S13.64,9.74,13.6,10.53Z"/><path d="M7.5,3.65A3.85,3.85,0,1,0,11.35,7.5h0A3.85,3.85,0,0,0,7.5,3.65ZM7.5,10A2.5,2.5,0,1,1,10,7.5,2.5,2.5,0,0,1,7.5,10Z"/><path d="M11.5,2.6a.9.9,0,1,0,.9.9A.9.9,0,0,0,11.5,2.6Z"/></svg>
				</a>
			</li>
			<li className="SocialMediaIconLinks__li">
				<a target="_blank" href="https://linkedin.com" rel="noopener noreferrer">
					<svg className="SocialMediaIconLinks__icon linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><title>LinkedIn</title><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
				</a>
			</li>
		</ul>
	)
}

SocialMediaIconLinks.propTypes = {
	isSmall: PropTypes.bool,
	isInBurger: PropTypes.bool,
}

SocialMediaIconLinks.defaultProps = {
	isSmall: false,
	isInBurger: false,
}

export default SocialMediaIconLinks
