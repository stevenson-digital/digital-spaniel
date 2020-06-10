import React, { useState, useEffect } from 'react'
import Heading from '../Heading'
import Testimonial from './Testimonial'
import { TESTIMONIALS } from '../../constants/testimonials'
import axios from 'axios'

const Testimonials = () => {
	const [testimonials] = useState(TESTIMONIALS)
	const [quotes, setQuotes] = useState([])

	useEffect(() => {
		// Get quotes from API
		// let i = 0
		// let promises = []
		// let quotes = []

		// for (i = 0; i < testimonials.length; i++) {
		// 	promises.push(
		// 		axios
		// 			.get('https://cors-anywhere.herokuapp.com/https://api.kanye.rest')
		// 			.then((response) => {
		// 				const quote = response.data.quote
		// 				const n = 50
		// 				const truncatedQuote = (quote.length > n) ? quote.substr(0, n-1) + ' ...' : quote
		// 				quotes.push(truncatedQuote)
		// 			})
		// 	)
		// }

		// Promise.all(promises).then(() => setQuotes(quotes))
	}, [])

	return (
		<div className="Testimonials">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="Testimonials__heading">
							<Heading line1="Kind words" line2="from kanye.rest" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="Testimonials__items">
							{testimonials.map((testimonial, index) => {
								return (
									<Testimonial
										key={'testimonial-' + index}
										img={testimonial.img}
										quote={quotes[index]}
										name={testimonial.name}
										jobTitle={testimonial.jobTitle}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
