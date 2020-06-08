import React, { useState, useEffect } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { NAV_LINKS } from '../../constants/navigation'
import { useDispatch } from 'react-redux'

const Navbar = () => {
	const [isScrolledStage1, setIsScrolledStage1] = useState(false)
	const [isScrolledStage2, setIsScrolledStage2] = useState(false)
	const [isOffScreen, setIsOffScreen] = useState(false)
	const [logoSrc, setLogoSrc] = useState('/img/digital-spaniel-logo.png')
	const dispatch = useDispatch()
	const stageOneOffset = window.innerWidth <= 640 ? 0 : 150
	const stageTwoOffset = window.innerWidth <= 640 ? 100 : 300

	// Change logo on load/resize
	useEffect(() => {
		const handleSwapLogo = () => {
			if (window.scrollY < stageOneOffset) {
				setLogoSrc(
					window.innerWidth <= 1024
						? '/img/digital-spaniel-logo-white.png'
						: '/img/digital-spaniel-logo.png'
				)
			}
		}

		handleSwapLogo()

		window.addEventListener('resize', handleSwapLogo)
	})

	// Shrink the navbar on scroll
	useScrollPosition(
		({ currPos }) => {
			setIsScrolledStage1(Math.abs(currPos.y) > stageOneOffset)
		},
		[isScrolledStage1]
	)

	// Add the bar on scroll
	useScrollPosition(
		({ currPos }) => {
			setIsScrolledStage2(Math.abs(currPos.y) > stageTwoOffset)
		},
		[isScrolledStage2]
	)

	// Change logo on scroll
	useScrollPosition(
		({ currPos }) => {
			if (Math.abs(currPos.y) >= stageTwoOffset) {
				setLogoSrc('/img/digital-spaniel-logo.png')
			} else if (Math.abs(currPos.y) < stageTwoOffset) {
				setLogoSrc(
					window.innerWidth <= 1024
						? '/img/digital-spaniel-logo-white.png'
						: '/img/digital-spaniel-logo.png'
				)
			} else {
				setLogoSrc('/img/digital-spaniel-logo.png')
			}
		},
		[logoSrc]
	)

	// Push the bar off screen or bring it back in
	useScrollPosition(
		({ prevPos, currPos }) => {
			setIsOffScreen(currPos.y < prevPos.y && Math.abs(currPos.y) > stageTwoOffset)
		},
		[isOffScreen]
	)

	const handleOpenBurgerMenu = () => {
		dispatch({ type: 'BURGER_OPEN' })
	}

	return (
		<nav
			className={
				'Navbar' +
				(isOffScreen ? ' Navbar--is-off-screen' : '') +
				(isScrolledStage1 ? ' Navbar--is-scrolled-stage-1' : '') +
				(isScrolledStage2 ? ' Navbar--is-scrolled-stage-2' : '')
			}
		>
			<a className="Navbar__logo" href="/">
				<img src={logoSrc} alt="Digital Spaniel Logo" />
			</a>
			<ul className="Navbar__links u-list-clear">
				{NAV_LINKS.map((link) => {
					return (
						<li className="Navbar__link" key={'nav-li-' + link.linkText}>
							<a className="f-os-semibold-20-18" href={link.link}>
								{link.linkText}
							</a>
						</li>
					)
				})}
			</ul>
			<button
				className="Navbar__burger u-btn-clear"
				onClick={handleOpenBurgerMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</nav>
	)
}

export default Navbar
