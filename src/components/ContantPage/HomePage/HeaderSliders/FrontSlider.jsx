import s from './HeaderSliders.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React from 'react';
import { Link } from 'react-router-dom';
import { urlImg } from '../../../../api/api';
import { useSelector } from 'react-redux';
import { selectGenres } from '../../../../selectors/home-selector';

function SampleNextArrow(props) {
	const { onClick } = props;
	return <div className={`${s.sliders__arrow} ${s.sliders__arrow_next}`} onClick={onClick} />;
}
function SamplePrevArrow(props) {
	const { onClick } = props;
	return <div className={`${s.sliders__arrow} ${s.sliders__arrow_prev}`} onClick={onClick} />;
}
function limitStr(str, n, symb) {
	if (!n && !symb) return str;
	symb = symb || '...';
	return str.substr(0, n - symb.length) + symb;
}

const FrontSlider = (props) => {
	let { movieCollaction, asNavFor, slider1 } = props;

	const genres = useSelector(selectGenres);

	const settings = {
		className: 'center',
		centerMode: true,
		dots: true,
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		speed: 400,
		autoplaySpeed: 3500,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		dotsClass: s.sliders__pagin,

		customPaging: function (i) {
			return (
				<div>
					<div className={s.sliders__button}></div>
				</div>
			);
		},
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 766,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					dots: false,
				},
			},
		],
	};

	return (
		<div className={s.header_slider}>
			<Slider {...settings} asNavFor={asNavFor} ref={slider1}>
				{movieCollaction.map((item) => {
					return (
						<div key={item.id} className={s.slider_item}>
							<div className={s.slider_block}>
								<p className={s.slider_block__title}>{item.title}</p>
								<img className={s.slider_block__bacgrount_img} src={`${urlImg}${item.backdrop_path}`} alt="" />
								<div className={s.slider_info}>
									<div className={s.slider_info__container}>
										<div className={s.slider_info__poster_block}>
											<Link to={`/web-movie/movie/${item.id}`}>
												<img src={`${urlImg}${item.poster_path}`} alt="" />
											</Link>
										</div>
										<div className={s.slider_info__text_block}>
											<Link to={`/web-movie/movie/${item.id}`} className={s.slider_info__title}>
												{item.title}
											</Link>
											<ul className={s.slider_info__ganres}>
												{item.genre_ids.map((item, index) => {
													if (index < 4) {
														return genres.map((elem) => {
															if (elem.id == item) {
																return <li key={elem.id}>{elem.name}</li>;
															}
														});
													}
												})}
											</ul>
											<p className={s.slider_info__data}>Реліз: {item.release_date}</p>
											<p className={s.slider_info__description}>{limitStr(item.overview, 120)}</p>
											<Link to={`/web-movie/movie/${item.id}`}>
												<p className={s.slider_info__view}>дивитися</p>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
export default FrontSlider;
