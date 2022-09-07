import s from './HeaderSliders.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeaderMovieCollection } from '../../../../store/home-reducer';
import { selectHeaderMovieCollection } from '../../../../selectors/home-selector';
import FrontSlider from './FrontSlider';
import BackSlider from './BackSlider';

const HeaderSliders = () => {
	let [currentImg, setCurrentImg] = useState(0);

	const dispatch = useDispatch();
	const headerMovieCollaction = useSelector(selectHeaderMovieCollection);

	let nextSliderImg = (index) => {
		setCurrentImg((currentImg = index));
	};

	useEffect(() => {
		dispatch(getHeaderMovieCollection());
	}, [null]);

	return (
		<div className={s.sliders}>
			<FrontSlider movieCollaction={headerMovieCollaction} nextSliderImg={nextSliderImg} />
			<BackSlider movieCollaction={headerMovieCollaction} currentImg={currentImg} />
		</div>
	);
};
export default React.memo(HeaderSliders);
