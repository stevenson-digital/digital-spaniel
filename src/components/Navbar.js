import React, { useState } from 'react'

const Navbar = () => {
	const [mobileIsOpen, setMobileIsOpen] = useState(false)

	const handleToggleMobileNav = (e) => {
		e.preventDefault()
		setMobileIsOpen(!mobileIsOpen)
	}

	const handleCloseMobileNav = () => {
		setMobileIsOpen(false)
	}

	return (
		<nav className={`Navbar ${mobileIsOpen ? 'Navbar--mobile-is-open' : ''}`}>
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
