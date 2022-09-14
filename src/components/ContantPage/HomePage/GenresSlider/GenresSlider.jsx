import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import s from './GenresSlider.module.scss';
import { selectCompilations } from '../../../../selectors/home-selector';
import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const GenresSlider = () => {
	let compilations = useSelector(selectCompilations);

	const settings = {
		className: 'slider variable-width',
		infinite: true,
		variableWidth: true,
		swipeToSlide: true,
		arrows: false,
		autoplay: true,
		speed: 900,
		autoplaySpeed: 900,
		pauseOnHover: true,
	};

	return (
		<div className={s.genres_slider}>
			<Slider {...settings}>
				{compilations.map((item) => {
					return item.data.map((elem) => {
						return (
							<div className={s.genres_slider__item}>
								<Link to={`/movies/&${item.type}=${elem.id}`} className={s.genres_slider__page}>
									{elem.name}
								</Link>
							</div>
						);
					});
				})}
			</Slider>
		</div>
	);
};
export default React.memo(GenresSlider);
