import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import s from './CompilationSlider.module.scss';
import { Link } from 'react-router-dom';
import { urlImg } from '../../../../api/api';
import React from 'react';

const SliderItem = ({ collaction }) => {
	const settings = {
		infinite: false,
		speed: 800,
		slidesToShow: 6,
		swipeToSlide: true,
		slidesToScroll: 2,
		lazyLoad: false,
		initialSlide: 0,
	};

	return (
		<div className={s.compilations_slider}>
			<Slider {...settings}>
				{collaction.data.map((item) => {
					return (
						<div key={item.id} className={s.compilations_slider__item}>
							<div className={s.compilations_slider__img}>
								<img src={`${urlImg}${item.poster_path}`} alt="" />
								<Link to={`/movie/${item.id}`} className={s.compilations_slider__play}>
									<div className={s.compilations_slider__play_container}>
										<div className={s.compilations_slider__play_icon}>
											<div className={s.compilations_slider__triangle_icon}></div>
										</div>
									</div>
								</Link>
							</div>
							<h3>{item.title}</h3>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
export default React.memo(SliderItem);
