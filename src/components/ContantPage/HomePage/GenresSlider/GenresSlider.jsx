import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import s from './GenresSlider.module.scss';
import { selectCompilations } from '../../../../selectors/home-selector';
import { useSelector } from 'react-redux';
import React from 'react';

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
								<p className={s.genres_slider__page}>{elem.name}</p>
							</div>
						);
					});
				})}
			</Slider>
		</div>
	);
};
export default React.memo(GenresSlider);
