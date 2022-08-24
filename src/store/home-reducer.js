import { apiDiscaverMovie, apiGetGenres } from '../api/api';

let SET_HEADER_MOVIE_COLLECTION = 'home-reducer/SET_HEADER_MOVIE_COLLECTION';
let SET_GENRES = 'home-reducer/SET_GENRES';
let SET_GENRES_IN_COMPILATIONS = 'home-reducer/SET_GENRES_IN_COMPILATIONS';
let SET_STARTED_MOVIE_COLLACTION = 'home-reducer/SET_STARTED_MOVIE_COLLACTION';
let SET_NEXT_MOVIE_COLLACTION = 'home-reducer/SET_NEXT_MOVIE_COLLACTION';
let RESET_MOVIE_COLLACTION = 'home-reducer/RESET_MOVIE_COLLACTION';
let TOGGLE_DISABLED_ADD_COLLACTION_BTN = 'home-reducer/TOGGLE_DISABLED_ADD_COLLACTION_BTN';
let SET_FETCHING = 'home-reducer/SET_FETCHING';
let SET_FETCHING_GENRES = 'home-reducer/SET_FETCHING_GENRES';

const initState = {
	compilations: [
		{
			type: 'sort_by',
			data: [
				{
					id: 'vote_count.desc',
					name: 'Найпопулярніші',
				},
			],
		},
		{
			type: 'primary_release_year',
			data: [
				{
					id: '2022',
					name: 'Новинки 2022',
				},
			],
		},
	],
	genres: [],
	headerMovieCollection: [],
	homeMovieCollections: [],
	indexStartedCompilationsSliders: 2,
	fetching: false,
	isFetchingGenres: false,
	disabledAddCollactionBtn: false,
};

const homeReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_HEADER_MOVIE_COLLECTION:
			return {
				...state,
				headerMovieCollection: action.movieCollaction,
			};
		case SET_GENRES:
			return {
				...state,
				genres: action.genres,
			};
		case SET_GENRES_IN_COMPILATIONS:
			if (state.compilations.length <= state.indexStartedCompilationsSliders) {
				return {
					...state,
					compilations: [...state.compilations, ...action.genres],
				};
			}
			return state;
		case SET_STARTED_MOVIE_COLLACTION:
			if (state.homeMovieCollections.length < state.indexStartedCompilationsSliders) {
				return {
					...state,
					homeMovieCollections: [
						...state.homeMovieCollections,
						{
							type: action.typeFilter,
							id: action.idFilter,
							name: action.nameCollaction,
							data: action.collaction,
						},
					],
				};
			}
			return state;
		case SET_NEXT_MOVIE_COLLACTION:
			return {
				...state,
				homeMovieCollections: [
					...state.homeMovieCollections,
					{
						type: action.typeFilter,
						id: action.idFilter,
						name: action.nameCollaction,
						data: action.collaction,
					},
				],
			};
		case TOGGLE_DISABLED_ADD_COLLACTION_BTN:
			return {
				...state,
				disabledAddCollactionBtn: action.statusBtn,
			};
		case SET_FETCHING:
			return {
				...state,
				fetching: action.status,
			};
		case SET_FETCHING_GENRES:
			return {
				...state,
				isFetchingGenres: action.status,
			};
		case RESET_MOVIE_COLLACTION:
			return {
				...state,
				homeMovieCollections: [],
			};
		default:
			return state;
	}
};

export const setHeaderMovieCollaction = (movieCollaction) => ({
	type: SET_HEADER_MOVIE_COLLECTION,
	movieCollaction,
});
export const setGenres = (genres) => ({
	type: SET_GENRES,
	genres,
});
export const setGenresInCompilations = (genres) => ({
	type: SET_GENRES_IN_COMPILATIONS,
	genres,
});
export const setStartedHomeMovieCollaction = (typeFilter, idFilter, nameCollaction, collaction) => ({
	type: SET_STARTED_MOVIE_COLLACTION,
	typeFilter,
	idFilter,
	nameCollaction,
	collaction,
});
export const setNextHomeMovieCollaction = (typeFilter, idFilter, nameCollaction, collaction) => ({
	type: SET_NEXT_MOVIE_COLLACTION,
	typeFilter,
	idFilter,
	nameCollaction,
	collaction,
});
export const resetMovieCollation = () => ({
	type: RESET_MOVIE_COLLACTION,
});
export const toggleDisabledAddCollactionBtb = (statusBtn) => ({
	type: TOGGLE_DISABLED_ADD_COLLACTION_BTN,
	statusBtn,
});
export const setFetching = (status) => ({
	type: SET_FETCHING,
	status,
});
export const setFetchingGenres = (status) => ({
	type: SET_FETCHING_GENRES,
	status,
});

// thunk
export const getHeaderMovieCollection = () => (dispatch) => {
	let page = 1;

	apiDiscaverMovie.getMoviesCollaction(page, '').then((response) => {
		if (response.status === 200) {
			let arr = [];

			response.data.results.map((item) => {
				if (item.overview) {
					return arr.push(item);
				}
			});
			dispatch(setHeaderMovieCollaction(arr.slice(0, 10)));
		}
	});
};
export const getGenres = () => (dispatch) => {
	dispatch(setFetchingGenres(true));
	apiGetGenres().then((response) => {
		if (response.status === 200) {
			dispatch(setGenres(response.data.genres));
			let compilationGenres = response.data.genres.map((genre) => {
				return {
					type: 'with_genres',
					data: [
						{
							id: genre.id,
							name: genre.name,
						},
					],
				};
			});
			dispatch(setGenresInCompilations(compilationGenres));
			dispatch(setFetchingGenres(false));
		}
	});
};
export const getStartedComplilationsMovie = (compilations) => (dispatch) => {
	compilations.forEach((item) => {
		item.data.forEach((elem) => {
			let type = item.type,
				property = elem.id,
				name = elem.name,
				params = `&${type}=${property}`,
				page = 1;

			apiDiscaverMovie.getMoviesCollaction(page, params).then((response) => {
				if (response.status === 200) {
					dispatch(setStartedHomeMovieCollaction(type, property, name, response.data.results));
				}
			});
		});
	});
};
export const getNextComplilationsMovie = (compilations, currentIndex) => (dispatch) => {
	dispatch(toggleDisabledAddCollactionBtb(true));
	dispatch(setFetching(false));

	compilations.forEach((item, index) => {
		if (index === currentIndex) {
			item.data.forEach((elem) => {
				let type = item.type,
					property = elem.id,
					name = elem.name,
					params = `&${type}=${property}`,
					page = 1;

				apiDiscaverMovie.getMoviesCollaction(page, params).then((response) => {
					if (response.status === 200) {
						dispatch(setNextHomeMovieCollaction(type, property, name, response.data.results));
						dispatch(toggleDisabledAddCollactionBtb(false));
					}
				});
			});
		}
	});
};

export default homeReducer;
