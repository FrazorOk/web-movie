import { useSelector } from 'react-redux';
import { selectMovieCast } from '../../../../../selectors/movie-selector';
import s from './MovieCast.module.scss';
import React from 'react';
import { Suspense } from 'react';
import Loader from '../../../../common/Loader/Loader';

let MovieCastImg = React.lazy(() => import('./MovieCastImg'));

const MovieCast = () => {
	let castList = useSelector(selectMovieCast);

	return (
		<div className={s.movie_cast}>
			<h5>У ролях:</h5>
			<ul className={s.movie_cast__list}>
				{castList.map((castCard, index) => {
					if (index < 7 && castCard.profile_path)
						return (
							<li className={s.movie_cast__item} key={castCard.id}>
								<div className={s.movie_cast__container_img}>
									<Suspense fallback={<Loader size={'70px'} marginTop={'10px'} />}>
										<MovieCastImg profile_path={castCard.profile_path} />
									</Suspense>
								</div>
								<p>{castCard.name}</p>
							</li>
						);
				})}
			</ul>
		</div>
	);
};

export default MovieCast;
