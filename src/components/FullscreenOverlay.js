import React, { useState } from 'react'

const FullscreenOverlay = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div
			className={
				'FullscreenOverlay' + (isOpen ? ' FullscreenOverlay--is-open' : '')
			}
		/>
	)
}

export default FullscreenOverlay
