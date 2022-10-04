import { urlImg } from '../../../../../api/api';
import s from './MovieCast.module.scss';

const MovieCastImg = ({ profile_path }) => {
	return <img className={s.movie_cast__img} src={`${urlImg}${profile_path}`} alt="sorry" />;
};

export default MovieCastImg;
