const initialState = {
	burgerMenuIsOpen: false,
	fullscreenOverlayIsOpen: false,
}

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'BURGER_OPEN':
			return {
				burgerMenuIsOpen: true,
				fullscreenOverlayIsOpen: true,
			}
		case 'BURGER_CLOSE':
			return {
				burgerMenuIsOpen: false,
				fullscreenOverlayIsOpen: false,
			}
		default:
			return state
	}
}

export default rootReducer
