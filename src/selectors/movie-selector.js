export let selectMovieCollection = (state) => {
	return state.movie.movieInfo;
};
export let selectMovieCast = (state) => {
	return state.movie.movieCast;
};
export let selectMovieVideo = (state) => {
	return state.movie.movieVideo;
};
export let selectMovieSimilar = (state) => {
	return state.movie.movieSimilar;
};
export let selectMovieFetching = (state) => {
	return state.movie.fetching;
};
