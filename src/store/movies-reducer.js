let SET_ACTIVE_COLLACION = 'movies-reducer/SET_ACTIVE_COLLACION';
let SET_CURRENT_PAGE = 'movies-reducer/SET_CURRENT_PAGE';
let RESET_MOVIES = 'movies-reducer/RESET_MOVIES';
let FETCHING_MOVIES_PAGINATION = 'movies-reducer/FETCHING_MOVIES_PAGINATION';

const initState = {
	activeCollaction: [],
	optionsFilter: {},
	pagination: {
		currentPage: 1,
		visiblePages: 10,
		totalCountPages: 20,
	},
	fetching: true,
};

const moviesReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_ACTIVE_COLLACION:
			return {
				...state,
				activeCollaction: action.movieCollaction.results,
				pagination: {
					...state.pagination,
					totalCountPages: action.movieCollaction.total_pages,
				},
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				pagination: {
					...state.pagination,
					currentPage: action.page,
				},
				fetching: true,
			};
		case FETCHING_MOVIES_PAGINATION:
			return {
				...state,
				fetching: action.status,
			};
		case RESET_MOVIES:
			return initState;
		default:
			return state;
	}
};

export const setActiveCollaction = (movieCollaction) => ({
	type: SET_ACTIVE_COLLACION,
	movieCollaction,
});
export const setCurrentPage = (page) => ({
	type: SET_CURRENT_PAGE,
	page,
});
export const resetMoviesPage = () => ({
	type: RESET_MOVIES,
});
export const toggleFetchingMoviesPagination = (status) => ({
	type: FETCHING_MOVIES_PAGINATION,
	status,
});

// thunk
export const getActiveCollection = (page, params, apiGet) => (dispatch) => {
	apiGet(page, params.params).then((response) => {
		if (response.status === 200) {
			dispatch(toggleFetchingMoviesPagination(false));
			dispatch(setActiveCollaction(response.data));
		}
	});
};

export default moviesReducer;
