import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { urlImg } from '../../../api/api';
import { selectMovieCollection, selectMovieFetching } from '../../../selectors/movie-selector';
import { getMovieCast, getMovieCollection, getMovieSimilar, getMovieVideos } from '../../../store/movie-reducer';
import MovieInfo from './MovieInfo/MovieInfo';
import s from './MoviePage.module.scss';
import MoviePlayer from './MoviePlayer/MoviePlayer';
import MovieSimilar from './MovieSimilar/MovieSimilar';
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import Loader from '../../common/Loader/Loader';

const MoviePage = ({ type }) => {
	let dispatch = useDispatch();
	let { params } = useParams();

	let movieInfo = useSelector(selectMovieCollection);
	let fetching = useSelector(selectMovieFetching);

	useEffect(() => {
		dispatch(getMovieCollection(params, type));
		dispatch(getMovieCast(params, type));
		dispatch(getMovieVideos(params, type));
		dispatch(getMovieSimilar(params, type));
	}, [params]);

	return (
		<>
			<ScrollToTop />
			{fetching ? (
				<Loader size={'150px'} marginTop={'150px'} />
			) : (
				<div className={s.movie_page}>
					<div className={s.movie_page__backgroundImg}>
						{movieInfo.backdrop_path && <img src={`${urlImg}${movieInfo.backdrop_path}`} alt="sorry" />}
					</div>
					<div className={s.movie_page__list}>
						<div className="container">
							<MovieInfo movieInfo={movieInfo} />
							<MoviePlayer title={movieInfo.title || movieInfo.name} />
							<MovieSimilar type={type} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MoviePage;
