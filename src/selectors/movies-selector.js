export let selectMoviesActiveCollection = (state) => {
	return state.movies.activeCollaction;
};
export let selectMoviesPage = (state) => {
	return state.movies.pagination.currentPage;
};
export let selectMoviesPagination = (state) => {
	return state.movies.pagination;
};
export let selectFetchingMoviesPagination = (state) => {
	return state.movies.fetching;
};
