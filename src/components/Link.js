import React from 'react'
import PropTypes from 'prop-types'

const Link = (props) => {
	const { link, linkText, modifiers } = props

	return (
		<a
			className={'Link f-os-semibold-20-18' + (modifiers ? ` ${modifiers}` : '')}
			href={link}
		>
			{linkText}
		</a>
	)
}

Link.propTypes = {
	link: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	modifiers: PropTypes.string,
}

Link.defaultProps = {
	link: '/',
	linkText: 'Clickable Link',
	modifiers: '',
}

export default Link
