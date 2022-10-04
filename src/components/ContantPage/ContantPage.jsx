import s from './ContantPage.module.scss';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getGenres } from '../../store/home-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectFetchingGenres } from '../../selectors/home-selector';
import Loader from '../common/Loader/Loader';
import React from 'react';
import { Suspense } from 'react';

let HomePage = React.lazy(() => import('./HomePage/HomePage'));
let MoviesPage = React.lazy(() => import('./MoviesPage/MoviesPage'));
let TvsPage = React.lazy(() => import('./TvsPage/TvsPage'));
let MoviePage = React.lazy(() => import('./MoviePage/MoviePage'));

const ContantPage = () => {
	let dispatch = useDispatch();
	let isFetchingGenres = useSelector(selectFetchingGenres);

	useEffect(() => {
		dispatch(getGenres());
	}, []);

	return (
		<div className={s.contant_page}>
			{isFetchingGenres ? (
				<Loader size="150px" marginTop="150px" />
			) : (
				<Suspense fallback={<Loader size={'150px'} marginTop={'150px'} />}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/movies/" element={<MoviesPage />} />
						<Route path="/movies/:params/" element={<MoviesPage />} />
						<Route path="/tv-series/" element={<TvsPage />} />
						<Route path="/movie/:params/" element={<MoviePage type="movie" />} />
						<Route path="/tv/:params/" element={<MoviePage type="tv" />} />
					</Routes>
				</Suspense>
			)}
		</div>
	);
};
export default React.memo(ContantPage);
