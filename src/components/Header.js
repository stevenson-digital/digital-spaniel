import React from 'react'
import Heading from './Heading'

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
					<div className="col-sm-12">
						<Heading type="h1" line1="We unleash" line2="business potential" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
