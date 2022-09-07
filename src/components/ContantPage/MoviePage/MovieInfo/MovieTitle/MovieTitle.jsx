import s from './MovieTitle.module.scss';

const MovieTitle = ({ title, originalTitle }) => {
	return (
		<div className={s.movie_title}>
			<span>{title}</span>
			<span>/</span>
			<span className={s.movie_title__original}>{originalTitle}</span>
		</div>
	);
};

export default MovieTitle;
