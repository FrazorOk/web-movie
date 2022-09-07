import { urlImg } from '../../../../api/api';
import MovieCast from './MovieCast/MovieCast';
import MovieGenres from './MovieGenres/MovieGenres';
import s from './MovieInfo.module.scss';
import MovieParagraf from './MovieParagraf/MovieParagraf';
import MovieTitle from './MovieTitle/MovieTitle';

const MovieInfo = ({ movieInfo }) => {
	let { poster_path, title, original_title } = movieInfo;

	console.log(movieInfo);

	return (
		<div className={s.movie_info}>
			<div className={s.movie_info__poster}>
				<img src={`${urlImg}${poster_path}`} alt="" />
			</div>
			<div className={s.movie_info__text}>
				<MovieTitle title={title} originalTitle={original_title} />
				<MovieGenres />
				<MovieParagraf />
				<MovieCast />
			</div>
		</div>
	);
};

export default MovieInfo;
