import axios from 'axios';

const apiKey = '5bd0e88a0c1b53a62a3bf438bfbd0013';
export const urlImg = 'https://image.tmdb.org/t/p/original';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

export let apiDiscaverMovie = {
	getMoviesCollaction: (page, params) => {
		return instance.get(
			`discover/movie?api_key=${apiKey}&language=uk-UA&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate${params}`
		);
	},
};

export let apiDiscaverTv = {
	getDiscaverTv: (page, params) => {
		return instance.get(
			`discover/tv?api_key=${apiKey}&language=uk-UA&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0${params}`
		);
	},
};

export let apiGetGenres = () => {
	return instance.get(`genre/movie/list?api_key=${apiKey}&language=uk-UA`);
};

export let apiGetMovie = {
	getMovieInfo: (id) => {
		return instance.get(`movie/${id}?api_key=${apiKey}&language=uk-UA`);
	},
	getMovieCast: (id) => {
		return instance.get(`movie/${id}/credits?api_key=${apiKey}&language=uk-UA`);
	},
	getMovieVideos: (id, language) => {
		return instance.get(`movie/${id}/videos?api_key=${apiKey}&language=${language}`);
	},
	getMovieSimilar: (id) => {
		return instance.get(`movie/${id}/similar?api_key=${apiKey}&language=uk-UA`);
	},
};
