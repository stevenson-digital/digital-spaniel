import React, { useState } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'

const Navbar = () => {
	const [isScrolledStage1, setIsScrolledStage1] = useState(false)
	const [isScrolledStage2, setIsScrolledStage2] = useState(false)
	const [isOffScreen, setIsOffScreen] = useState(false)

	useScrollPosition(
		({ currPos }) => {
			setIsScrolledStage1(Math.abs(currPos.y) > 0)
		},
		[isScrolledStage1]
	)

	useScrollPosition(
		({ currPos }) => {
			setIsScrolledStage2(Math.abs(currPos.y) > 100)
		},
		[isScrolledStage2]
	)

	useScrollPosition(
		({ prevPos, currPos }) => {
			setIsOffScreen(currPos.y < prevPos.y && Math.abs(currPos.y) > 300)
		},
		[isOffScreen]
	)

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
				<li className="Navbar__link">
					<a className="f-os-semibold-20-18" href="/">
						Services
					</a>
				</li>
				<li className="Navbar__link">
					<a className="f-os-semibold-20-18" href="/">
						Work
					</a>
				</li>
				<li className="Navbar__link">
					<a className="f-os-semibold-20-18" href="/">
						About
					</a>
				</li>
				<li className="Navbar__link">
					<a className="f-os-semibold-20-18" href="/">
						Blog
					</a>
				</li>
				<li className="Navbar__link">
					<a className="f-os-semibold-20-18" href="/">
						Contact
					</a>
				</li>
			</ul>
			<button className="Navbar__burger u-btn-clear">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</nav>
	)
}

export default Navbar
