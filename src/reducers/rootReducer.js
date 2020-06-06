const initialState = {
	burgerMenuIsOpen: false
}

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'OPEN':
			return { burgerMenuIsOpen: true }
		case 'CLOSE':
			return { burgerMenuIsOpen: false }
		default:
			return state
	}
}

export default rootReducer
