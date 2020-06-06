import React from 'react'
import { useSelector } from 'react-redux'

const FullscreenOverlay = () => {
	const isOpen = useSelector((state) => state.fullscreenOverlayIsOpen)

	return (
		<div
			className={
				'FullscreenOverlay' + (isOpen ? ' FullscreenOverlay--is-open' : '')
			}
		/>
	)
}

export default FullscreenOverlay
