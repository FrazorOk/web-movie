import s from './MovieParagraf.module.scss';

const MovieParagraf = ({ overview }) => {
	return (
		<div className={s.movie_paragraf}>
			<h5>Опис:</h5>
			<p>{overview}</p>
		</div>
	);
};

export default MovieParagraf;
