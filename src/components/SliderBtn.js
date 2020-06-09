import React from 'react'
import PropTypes from 'prop-types'

const SliderBtn = (props) => {
	const { callback, arrowDirection } = props

	const handleCallback = () => {
		callback()
	}

	return (
		<button
			className={
				'SliderBtn u-btn-clear' +
				(arrowDirection === 'right' ? ' SliderBtn--right' : ' SliderBtn--left')
			}
			onClick={() => handleCallback()}
		>
			<svg x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 65.040064,1001.956 a 3.0003,3.0003 0 0 0 -0.8125,-1.6563 l -23.99999,-25.00003 a 3.0003,3.0003 0 1 0 -4.3438,4.125 l 22.03129,22.93753 -22.03129,22.9375 a 3.0003,3.0003 0 1 0 4.3438,4.125 l 23.99999,-25 a 3.0003,3.0003 0 0 0 0.8125,-2.4687 z" fill="#000000" fillOpacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>
		</button>
	)
}

SliderBtn.propTypes = {
	direction: PropTypes.string,
}

SliderBtn.defaultProps = {
	direction: 'right',
}

export default SliderBtn
