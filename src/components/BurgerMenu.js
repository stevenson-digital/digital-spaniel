import React, { useState } from 'react'
import { NAV_LINKS } from '../constants/navigation'
import SocialMediaIconLinks from './SocialMediaIconLinks'

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="BurgerMenu">
			<button className="BurgerMenu__close u-btn-clear">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1" x="0px" y="0px"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g fillRule="nonzero"><rect x="0" y="0" width="20" height="20"/><path d="M13.4142136,12 L20.4852814,19.0710678 L19.0710678,20.4852814 L12,13.4142136 L4.92893219,20.4852814 L3.51471863,19.0710678 L10.5857864,12 L3.51471863,4.92893219 L4.92893219,3.51471863 L12,10.5857864 L19.0710678,3.51471863 L20.4852814,4.92893219 L13.4142136,12 Z" fill="#000000" /></g></g></svg>
			</button>
			<ul className="BurgerMenu__links u-list-clear">
				{NAV_LINKS.map((link) => {
					return (
						<li className="BurgerMenu__link" key={'burger-li-' + link.linkText}>
							<a className="f-agg-48-36" href={link.link}>
								{link.linkText}
							</a>
						</li>
					)
				})}
			</ul>
			<SocialMediaIconLinks isSmall={true} isInBurger={true} />
		</div>
	)
}

export default BurgerMenu
