import s from './HeaderSliders.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React from 'react';
import { urlImg } from '../../../../api/api';

const BackSlider = (props) => {
	let { movieCollaction, asNavFor, slider2 } = props;

	const settings = {
		arrows: false,
		fade: true,
		dots: false,
		draggable: false,
		infinite: true,
		slidesToShow: 1,
		speed: 400,
	};

	return (
		<div className={s.backgound_slider}>
			<Slider {...settings} asNavFor={asNavFor} ref={slider2}>
				{movieCollaction.map((item) => {
					return (
						<div key={item.id} className={s.slider_item}>
							<div className={s.slider_block}>
								<img src={`${urlImg}${item.backdrop_path}`} alt="" />
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
export default BackSlider;
