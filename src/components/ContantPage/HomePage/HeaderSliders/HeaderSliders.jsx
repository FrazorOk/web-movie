import s from './HeaderSliders.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeaderMovieCollection } from '../../../../store/home-reducer';
import { selectHeaderMovieCollection } from '../../../../selectors/home-selector';
import FrontSlider from './FrontSlider';
import BackSlider from './BackSlider';

const HeaderSliders = () => {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	const slider1 = useRef(null);
	const slider2 = useRef(null);

	const dispatch = useDispatch();
	const headerMovieCollaction = useSelector(selectHeaderMovieCollection);

	useEffect(() => {
		setNav1(slider1.current);
		setNav2(slider2.current);
		dispatch(getHeaderMovieCollection());
	}, [null]);

	return (
		<div className={s.sliders}>
			<FrontSlider movieCollaction={headerMovieCollaction} asNavFor={nav2} slider1={slider1} />
			<BackSlider movieCollaction={headerMovieCollaction} asNavFor={nav1} slider2={slider2} />
		</div>
	);
};
export default React.memo(HeaderSliders);
