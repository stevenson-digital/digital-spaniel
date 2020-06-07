import React from 'react'
import HeadingTextLink from './HeadingTextLink'

const Header = () => {
	return (
		<div className="Header">
			<img
				className="Header__bg"
				src="/img/jumping-dog@2x.png"
				alt="A jumping dog"
			/>
			<div class="container">
				<div className="row">
					<div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
						<p className="Header__capabilities f-os-semibold-16">Brand, Dev, Ecom, Marketing</p>
						<HeadingTextLink
							headingType="h1"
							headingLine1="We unleash"
							headingLine2="business potential"
							text="We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance."
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
