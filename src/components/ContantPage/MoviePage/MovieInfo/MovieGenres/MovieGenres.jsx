import { Link } from 'react-router-dom';
import s from './MovieGenres.module.scss';

const MovieGenres = ({ genres }) => {
	return (
		<div className={s.movie_genres}>
			{genres &&
				genres.map((genre) => {
					return (
						<Link to={`/movies/&with_genres=${genre.id}`} className={s.movie_genres__genre} key={genre.id}>
							{genre.name}
						</Link>
					);
				})}
		</div>
	);
};

export default MovieGenres;
