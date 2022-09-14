import { useSelector } from 'react-redux';
import { urlImg } from '../../../../../api/api';
import { selectMovieCast } from '../../../../../selectors/movie-selector';
import s from './MovieCast.module.scss';

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
								<img src={`${urlImg}${castCard.profile_path}`} alt="sorry" />
								<p>{castCard.name}</p>
							</li>
						);
				})}
			</ul>
		</div>
	);
};

export default MovieCast;
