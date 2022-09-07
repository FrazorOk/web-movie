import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { urlImg } from '../../../api/api';
import { selectMovieCollection } from '../../../selectors/movie-selector';
import { getMovieCollection } from '../../../store/movie-reducer';
import MovieInfo from './MovieInfo/MovieInfo';
import s from './MoviePage.module.scss';
import MoviePlayer from './MoviePlayer/MoviePlayer';

const MoviePage = () => {
	let dispath = useDispatch();

	let movieInfo = useSelector(selectMovieCollection);

	let { params } = useParams();

	useEffect(() => {
		dispath(getMovieCollection(params));
	}, []);

	return (
		<div className={s.movie_page}>
			<div className={s.movie_page__backgroundImg}>
				{movieInfo.backdrop_path && <img src={`${urlImg}${movieInfo.backdrop_path}`} alt="" />}
			</div>
			<div className={s.movie_page__list}>
				<div className="container">
					<MovieInfo movieInfo={movieInfo} />
					<MoviePlayer />
				</div>
			</div>
		</div>
	);
};

export default MoviePage;
