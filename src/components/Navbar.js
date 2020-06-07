import React, { useState } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { NAV_LINKS } from '../constants/navigation'
import { useDispatch } from 'react-redux'

const Navbar = () => {
	const [isScrolledStage1, setIsScrolledStage1] = useState(false)
	const [isScrolledStage2, setIsScrolledStage2] = useState(false)
	const [isOffScreen, setIsOffScreen] = useState(false)
	const dispatch = useDispatch()
	const stageOneOffset = window.innerWidth <= 640 ? 0 : 150
	const stageTwoOffset = window.innerWidth <= 640 ? 100 : 300

	useScrollPosition(
		({ currPos }) => {
			setIsScrolledStage1(Math.abs(currPos.y) > 0)
		},
		[isScrolledStage1]
	)

	useScrollPosition(
		({ currPos }) => {
			setIsScrolledStage2(Math.abs(currPos.y) > stageOneOffset)
		},
		[isScrolledStage2]
	)

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
				<img src="/img/digital-spaniel-logo.png" alt="Digital Spaniel Logo" />
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
