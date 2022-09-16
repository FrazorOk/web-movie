import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { urlImg } from '../../../api/api';
import { selectMovieCollection } from '../../../selectors/movie-selector';
import { getMovieCast, getMovieCollection, getMovieSimilar, getMovieVideos } from '../../../store/movie-reducer';
import MovieInfo from './MovieInfo/MovieInfo';
import s from './MoviePage.module.scss';
import MoviePlayer from './MoviePlayer/MoviePlayer';
import MovieSimilar from './MovieSimilar/MovieSimilar';
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';

const MoviePage = () => {
	let dispatch = useDispatch();
	let { params } = useParams();

	let movieInfo = useSelector(selectMovieCollection);

	useEffect(() => {
		dispatch(getMovieCollection(params));
		dispatch(getMovieCast(params));
		dispatch(getMovieVideos(params));
		dispatch(getMovieSimilar(params));
	}, [params]);

	return (
		<>
			<ScrollToTop />
			<div className={s.movie_page}>
				<div className={s.movie_page__backgroundImg}>
					{movieInfo.backdrop_path && <img src={`${urlImg}${movieInfo.backdrop_path}`} alt="sorry" />}
				</div>
				<div className={s.movie_page__list}>
					<div className="container">
						<MovieInfo movieInfo={movieInfo} />
						<MoviePlayer title={movieInfo.title || movieInfo.name} />
						<MovieSimilar />
					</div>
				</div>
			</div>
		</>
	);
};

export default MoviePage;
