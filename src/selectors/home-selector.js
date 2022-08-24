export let selectHeaderMovieCollection = (state) => {
	return state.home.headerMovieCollection;
};
export let selectGenres = (state) => {
	return state.home.genres;
};
export let selectCompilations = (state) => {
	return state.home.compilations;
};
export let selectIndexStartedCompilationsSliders = (state) => {
	return state.home.indexStartedCompilationsSliders;
};
export let selectHomeMovieCollections = (state) => {
	return state.home.homeMovieCollections;
};
export let selectDisabledAddCollactionBtn = (state) => {
	return state.home.disabledAddCollactionBtn;
};
export let selectHomeFetching = (state) => {
	return state.home.fetching;
};
export let selectFetchingGenres = (state) => {
	return state.home.isFetchingGenres;
};
export let selectHomeHeaderMovieIsFetching = (state) => {
	return state.home.headerMovieIsFetching;
};
