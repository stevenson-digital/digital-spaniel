import React, { useState } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isOffScreen, setIsOffScreen] = useState(false)

	useScrollPosition(
		({ prevPos, currPos }) => {
			setIsOffScreen(currPos.y < prevPos.y && Math.abs(currPos.y) > 300)
		},
		[isOffScreen]
	)

	useScrollPosition(
		({ currPos }) => {
			setIsScrolled(Math.abs(currPos.y) > 0)
		},
		[isScrolled]
	)

	return (
		<nav
			className={
				'Navbar' +
				(isOffScreen ? ' Navbar--is-off-screen' : '') +
				(isScrolled ? ' Navbar--is-scrolled' : '')
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
