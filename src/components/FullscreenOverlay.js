import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const FullscreenOverlay = () => {
	const isOpen = useSelector((state) => state.fullscreenOverlayIsOpen)
	const dispatch = useDispatch()

	return (
		<div
			className={
				'FullscreenOverlay' + (isOpen ? ' FullscreenOverlay--is-open' : '')
			}
			onClick={() => dispatch({ type: 'BURGER_CLOSE' })}
		/>
	)
}

export default FullscreenOverlay
