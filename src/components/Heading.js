import React from 'react'
import PropTypes from 'prop-types'

const Heading = (props) => {
	const { type, line1, line2 } = props

	const renderHeading = () => {
		if (type === 'h1') {
			return (
				<h1 className="f-agg-48-36">
					<span>{line1}</span>
					<span>{line2}</span>
				</h1>
			)
		} else {
			return (
				<h2 className="f-agg-48-36">
					<span>{line1}</span>
					<span>{line2}</span>
				</h2>
			)
		}
	}

	return <div className="Heading">{renderHeading()}</div>
}

Heading.propTypes = {
	type: PropTypes.string,
	line1: PropTypes.string,
	line2: PropTypes.string,
}

Heading.defaultProps = {
	type: 'h2',
	line1: 'Heading line 1',
	line2: 'Heading line 2',
}

export default Heading