import { apiGetMovie } from '../api/api';

let SET_MOVIE_INFO = 'movie-reducer/SET_MOVIE_COLLACTION';
let SET_MOVIE_CAST = 'movie-reducer/SET_MOVIE_CAST';
let SET_MOVIE_VIDEO = 'movie-reducer/SET_MOVIE_VIDEO';
let SET_MOVIE_SIMILAR = 'movie-reducer/SET_MOVIE_SIMILAR';
let TOGGLE_MOVIE_FETCHING = 'movie-reducer/TOGGLE_MOVIE_FETCHING';

const initState = {
	movieInfo: [],
	movieCast: [],
	movieVideo: [],
	movieSimilar: [],
	fetching: true,
};

const movieReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_MOVIE_INFO:
			return {
				...state,
				movieInfo: action.movieInfo,
			};
		case SET_MOVIE_CAST:
			return {
				...state,
				movieCast: action.data,
			};
		case SET_MOVIE_VIDEO:
			return {
				...state,
				movieVideo: action.video,
			};
		case SET_MOVIE_SIMILAR:
			return {
				...state,
				movieSimilar: action.list,
			};
		case TOGGLE_MOVIE_FETCHING:
			return {
				...state,
				fetching: action.status,
			};
		default:
			return state;
	}
};

export const setMovieCollaction = (movieInfo) => ({
	type: SET_MOVIE_INFO,
	movieInfo,
});
export const setMovieCast = (data) => ({
	type: SET_MOVIE_CAST,
	data,
});
export const setMovieVideo = (video) => ({
	type: SET_MOVIE_VIDEO,
	video,
});
export const setMovieSimilar = (list) => ({
	type: SET_MOVIE_SIMILAR,
	list,
});
export const setMovieFetching = (status) => ({
	type: TOGGLE_MOVIE_FETCHING,
	status,
});

// thunk
export const getMovieCollection = (params, type) => (dispatch) => {
	dispatch(setMovieFetching(true));
	apiGetMovie.getMovieInfo(params, type).then((response) => {
		dispatch(setMovieCollaction(response.data));
		dispatch(setMovieFetching(false));
	});
};
export const getMovieCast = (id, type) => (dispatch) => {
	apiGetMovie.getMovieCast(id, type).then((response) => {
		dispatch(setMovieCast(response.data.cast));
	});
};
export const getMovieVideos = (id, type) => (dispatch) => {
	apiGetMovie.getMovieVideos(id, type, 'uk-UA').then((response) => {
		if (response.data.results.length === 0) {
			apiGetMovie.getMovieVideos(id, type, 'en-US').then((result) => {
				dispatch(setMovieVideo(result.data.results));
			});
		} else {
			dispatch(setMovieVideo(response.data.results));
		}
	});
};
export const getMovieSimilar = (id, type) => (dispatch) => {
	apiGetMovie.getMovieSimilar(id, type).then((response) => {
		dispatch(setMovieSimilar(response.data.results));
	});
};

export default movieReducer;
