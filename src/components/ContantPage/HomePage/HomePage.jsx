import { useDispatch, useSelector } from 'react-redux';
import { resetMovieCollation, setFetching } from '../../../store/home-reducer';
import { selectDisabledAddCollactionBtn } from '../../../selectors/home-selector';
import BtnArrowDown from '../../common/BtnArrowDown/BtnArrowDown';
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop';
import CompilationSlider from './CompilationSlider/CompilationSlider';
import GenresSlider from './GenresSlider/GenresSlider';
import HeaderSliders from './HeaderSliders/HeaderSliders';
import s from './HomePage.module.scss';
import { useEffect } from 'react';

const HomePage = () => {
	let dispatch = useDispatch();
	let statusBtnAddNewCollaction = useSelector(selectDisabledAddCollactionBtn);

	let addNewCollaction = () => {
		dispatch(setFetching(true));
	};

	useEffect(() => {
		return () => {
			dispatch(resetMovieCollation());
		};
	}, []);

	return (
		<div className={s.home_page}>
			<ScrollToTop />
			<HeaderSliders />
			<div className="container">
				<GenresSlider />
				<CompilationSlider />
				<BtnArrowDown onClick={addNewCollaction} disabled={statusBtnAddNewCollaction} text={'більше підбірок'} marginTop={'80px'} />
			</div>
		</div>
	);
};
export default HomePage;
