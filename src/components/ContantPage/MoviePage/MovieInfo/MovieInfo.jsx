import { urlImg } from '../../../../api/api';
import MovieCast from './MovieCast/MovieCast';
import MovieGenres from './MovieGenres/MovieGenres';
import s from './MovieInfo.module.scss';
import MovieParagraf from './MovieParagraf/MovieParagraf';
import MovieTitle from './MovieTitle/MovieTitle';
import MovieRelease from './MovieRelease/MovieRelease';
import MovieRating from './MovieRating/MovieRating';
import React from 'react';

const MovieInfo = ({ movieInfo }) => {
	let { poster_path, release_date, genres, overview, production_countries, vote_average } = movieInfo;

	return (
		<div className={s.movie_info}>
			<div className={s.movie_info__poster}>
				{poster_path && <img src={`${urlImg}${poster_path}`} alt="" />}
				<MovieRating vote_average={vote_average} />
			</div>
			<div className={s.movie_info__text}>
				<MovieTitle title={movieInfo.title || movieInfo.name} originalTitle={movieInfo.original_title || movieInfo.original_name} />
				<MovieRelease releaseDate={release_date || movieInfo.last_air_date} productionCountries={production_countries} />
				<MovieGenres genres={genres} />
				<MovieParagraf overview={overview} />
				<MovieCast />
			</div>
		</div>
	);
};

export default React.memo(MovieInfo);
