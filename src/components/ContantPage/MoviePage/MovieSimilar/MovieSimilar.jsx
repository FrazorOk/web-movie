import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './MovieSimilar.module.scss';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { selectMovieSimilar } from '../../../../selectors/movie-selector';
import { urlImg } from '../../../../api/api';
import { Link } from 'react-router-dom';

const MovieSimilar = () => {
	let movieSimilar = useSelector(selectMovieSimilar);

	const settings = {
		infinite: false,
		speed: 400,
		slidesToShow: 6,
		swipeToSlide: true,
		slidesToScroll: 2,
		initialSlide: 0,
	};

	return (
		<div className={s.movie_similar}>
			<h3>Схожі:</h3>
			<Slider {...settings}>
				{movieSimilar.map((movie) => (
					<div className={s.movie_similar__slider_item} key={movie.id}>
						<Link to={`/movie/${movie.id}`} className={s.movie_similar__slider_card}>
							<img src={`${urlImg}${movie.poster_path}`} alt="" />
							<h4>{movie.title || movie.name}</h4>
						</Link>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default MovieSimilar;
