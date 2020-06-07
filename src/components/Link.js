import React from 'react'
import PropTypes from 'prop-types'

const Link = (props) => {
	const { link, linkText } = props

	return (
		<a className="Link f-os-semibold-20-18" href={link}>
			{linkText}
		</a>
	)
}

Link.propTypes = {
	link: PropTypes.string,
	linkText: PropTypes.string,
}

Link.defaultProps = {
	link: '/',
	linkText: 'Clickable Link',
}

export default Link
