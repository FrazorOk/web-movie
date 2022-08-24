let TOGGLE_NAVBAR_STATUS = 'header-reducer/TOGGLE-NAVBAR-STATUS';
let TOGGLE_NAVBAR_STATUS_LEAVE = 'header-reducer/TOGGLE_NAVBAR_STATUS_LEAVE';

const initState = {
	navBarStatus: false,
};

const headerReducer = (state = initState, action) => {
	switch (action.type) {
		case TOGGLE_NAVBAR_STATUS:
			return {
				...state,
				navBarStatus: !state.navBarStatus,
			};
		case TOGGLE_NAVBAR_STATUS_LEAVE:
			if (state.navBarStatus) {
				return {
					...state,
					navBarStatus: !state.navBarStatus,
				};
			}
			return state;

		default:
			return state;
	}
};

export const toggleNavBarStatus = () => ({
	type: TOGGLE_NAVBAR_STATUS,
});
export const toggleNavBarStatusWhenLeave = () => ({
	type: TOGGLE_NAVBAR_STATUS_LEAVE,
});

export default headerReducer;
