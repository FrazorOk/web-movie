import { apiGetMovie } from '../api/api';

let SET_MOVIE_INFO = 'movie-reducer/SET_MOVIE_COLLACTION';

const initState = {
	movieInfo: [],
	fetching: true,
};

const movieReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_MOVIE_INFO:
			return {
				...state,
				movieInfo: action.movieInfo,
			};
		default:
			return state;
	}
};

export const setMovieCollaction = (movieInfo) => ({
	type: SET_MOVIE_INFO,
	movieInfo,
});

// thunk
export const getMovieCollection = (params) => (dispatch) => {
	apiGetMovie(params).then((response) => {
		dispatch(setMovieCollaction(response.data));
	});
};

export default movieReducer;
