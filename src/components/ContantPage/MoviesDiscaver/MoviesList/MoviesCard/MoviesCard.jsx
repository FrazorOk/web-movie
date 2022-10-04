import { urlImg } from '../../../../../api/api';
import s from './MoviesCard.module.scss';
import { Link } from 'react-router-dom';

const MoviesCard = ({ item, typeApi }) => {
	return (
		<div className={s.movies_card}>
			<div className={s.movies_card__img}>
				<img src={`${urlImg}${item.poster_path}`} alt="error" />
				<Link to={`/${typeApi}/${item.id}`} className={s.movies_card__play}>
					<div className={s.movies_card__play_container}>
						<div className={s.movies_card__play_icon}>
							<div className={s.movies_card__triangle_icon}></div>
						</div>
					</div>
				</Link>
			</div>
			<h3 className={s.movies_card__title}>{item.title || item.name}</h3>
		</div>
	);
};
export default MoviesCard;
