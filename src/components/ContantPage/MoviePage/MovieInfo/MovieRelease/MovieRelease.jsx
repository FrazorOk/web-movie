import s from './MovieRelease.module.scss';

const MovieRelease = ({ releaseDate, productionCountries }) => {
	return (
		<div className={s.release_movie}>
			<p>Реліз: {releaseDate}</p>
			{productionCountries && (
				<p>
					<span>Країна: </span>
					{productionCountries.map((countrie, index) => {
						return <span key={index}>{countrie.name}; </span>;
					})}
				</p>
			)}
		</div>
	);
};

export default MovieRelease;
