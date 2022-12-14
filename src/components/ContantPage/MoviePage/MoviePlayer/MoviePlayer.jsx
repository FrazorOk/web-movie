import { useSelector } from 'react-redux';
import { selectMovieVideo } from '../../../../selectors/movie-selector';
import s from './MoviePlayer.module.scss';
import backgroundImg from '../../../../source/pngegg.png';
import React from 'react';

const MoviePlayer = ({ title }) => {
	let videos = useSelector(selectMovieVideo);

	return (
		<div className={s.movie_players}>
			<img src={backgroundImg} className={s.movie_players__backgroundImg} alt="" />
			<h4>Дивитися онлайн {title} у найкращій якості</h4>
			{videos.map((video, index) => {
				if (index <= 0 && video.key)
					return (
						<div className={s.movie_players__player} key={video.id}>
							<iframe
								className={s.movie_players__video}
								src={`https://www.youtube.com/embed/${video.key}`}
								title="YouTube video player"
								frameBorder="0"
								controls="1"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen={true}></iframe>
						</div>
					);
			})}
		</div>
	);
};

export default React.memo(MoviePlayer);
