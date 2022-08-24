import s from './MoviesDiscaver.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveCollection, resetMoviesPage } from '../../../store/movies-reducer';
import { selectFetchingMoviesPagination, selectMoviesActiveCollection, selectMoviesPage } from '../../../selectors/movies-selector';
import MoviesList from './MoviesList/MoviesList';
import Loader from '../../common/Loader/Loader';
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import MoviesFilter from './MoviesFilter/MoviesFilter';

function MoviesDiscaver({ getApi }) {
	let params = useParams();
	let dispatch = useDispatch();

	let activeCollection = useSelector(selectMoviesActiveCollection);
	let fetchingActiveCollection = useSelector(selectFetchingMoviesPagination);
	let page = useSelector(selectMoviesPage);

	useEffect(() => {
		return () => {
			dispatch(resetMoviesPage());
		};
	}, []);

	useEffect(() => {
		if (fetchingActiveCollection) {
			dispatch(getActiveCollection(page, params, getApi));
		}
	}, [fetchingActiveCollection]);

	return (
		<>
			<ScrollToTop />
			{!fetchingActiveCollection ? (
				<>
					<div className={s.background_movies}></div>
					<div className="container">
						<div className={s.movies_page}>
							<MoviesFilter />
							<MoviesList activeCollection={activeCollection} />
						</div>
					</div>
				</>
			) : (
				<Loader size={'150px'} marginTop={'150px'} />
			)}
		</>
	);
}
export default MoviesDiscaver;
