import { urlImg } from '../../../../api/api';
import MovieCast from './MovieCast/MovieCast';
import MovieGenres from './MovieGenres/MovieGenres';
import s from './MovieInfo.module.scss';
import MovieParagraf from './MovieParagraf/MovieParagraf';
import MovieTitle from './MovieTitle/MovieTitle';
import MovieRelease from './MovieRelease/MovieRelease';

const MovieInfo = ({ movieInfo }) => {
	let { poster_path, title, original_title, release_date, genres, overview, production_countries } = movieInfo;

	return (
		<div className={s.movie_info}>
			<div className={s.movie_info__poster}>{poster_path && <img src={`${urlImg}${poster_path}`} alt="" />}</div>
			<div className={s.movie_info__text}>
				<MovieTitle title={title} originalTitle={original_title} />
				<MovieRelease releaseDate={release_date} productionCountries={production_countries} />
				<MovieGenres genres={genres} />
				<MovieParagraf overview={overview} />
				<MovieCast />
			</div>
		</div>
	);
};

export default MovieInfo;
