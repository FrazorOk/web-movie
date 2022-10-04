import s from './MovieRating.module.scss';
import starImg from '../../../../../source/star.png';
import { useEffect, useState } from 'react';

const MovieRating = ({ vote_average }) => {
	let [goldStars, setGoldStars] = useState([]);

	useEffect(() => {
		for (let i = 0; i < Math.round(vote_average); i++) {
			setGoldStars((stars) => [...stars, i]);
		}

		return () => setGoldStars((goldStars = []));
	}, [vote_average]);

	return (
		<div className={s.movie_rating}>
			{goldStars.map((star, index) => (
				<img key={index} src={starImg} alt="" />
			))}
			{goldStars.map((star, index) => {
				if (index < 10 - goldStars.length) {
					return <img key={index} src={starImg} className={s.movie_rating__black_star} alt="" />;
				}
			})}
			{vote_average && <p> - {vote_average.toFixed(1)}</p>}
		</div>
	);
};

export default MovieRating;
